import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import 'firebase/firestore';

import { first, map } from 'rxjs/operators';

import { Flame } from './flame';

const ERR_MSG =
  'Firebaseでなにか問題が発生している可能性があります。 しばらく経ってから再度更新して下さい。';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private readonly flameCollection = this.angularFirestore.collection('flames');
  private flameDocument?: AngularFirestoreDocument;
  private selfFlame?: Flame;
  flames$ = this.flameCollection.valueChanges();

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
    private cdr: ChangeDetectorRef
  ) {}

  /**
   * - 古い炎を削除する。
   * - 匿名ログインし、ドキュメントを準備する。
   */
  ngOnInit() {
    this.angularFireAuth.signInAnonymously();
    this.angularFireAuth.onAuthStateChanged(user => {
      if (user == null) {
        return;
      }
      this.flameDocument = this.flameCollection.doc(user.uid);
      this.flameDocument
        .valueChanges()
        .pipe(first())
        .pipe(map(value => new Flame({ ...value, id: user.uid })))
        .subscribe(value => (this.selfFlame = value));
      this.deleteOneMinuteAgoCollection();
    });
  }

  /** 最終更新日が1分前以前のコレクションを全て削除する。 */
  private deleteOneMinuteAgoCollection() {
    return this.angularFirestore
      .collection('flames', ref => {
        const oneMinuteAgo = ((d = new Date()) =>
          new Date(d.setMinutes(d.getMinutes() - 1)))();
        return ref.where('updatedAt', '<=', oneMinuteAgo);
      })
      .get()
      .subscribe(querySnapshot => {
        const batch = this.angularFirestore.firestore.batch();
        querySnapshot.forEach(doc => batch.delete(doc.ref));
        return batch.commit();
      });
  }

  /** SVGクリック時に座標を決定し、炎の追加もしくは移動を行う。 */
  detectPoint(e: MouseEvent) {
    if (this.selfFlame == null) {
      alert(ERR_MSG);
      return;
    }
    const { id, hue } = this.selfFlame;
    this.selfFlame = new Flame({ id, hue, x: e.x, y: e.y });
    if (this.flameDocument) {
      this.flameDocument.set({ ...this.selfFlame }, { merge: true });
    }
    this.cdr.markForCheck();
  }
}
