import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { Flame } from './flame';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  flames: Flame[] = [];
  selfFlame?: Flame;

  constructor(private cdr: ChangeDetectorRef) {}

  /** SVGクリック時に座標を決定し、炎の追加もしくは移動を行う。 */
  detectPoint(e: MouseEvent) {
    if (this.selfFlame) {
      Object.assign(this.selfFlame, { x: e.x, y: e.y });
    } else {
      this.selfFlame = new Flame({ x: e.x, y: e.y });
      this.flames.push(this.selfFlame);
    }
    this.cdr.markForCheck();
  }
}
