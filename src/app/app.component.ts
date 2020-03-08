import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Flame } from './flame';

/** SVGをクリックした時に拡縮されたキャンバスに整合性を取った座標を返す。 */
const getPoint = (mouseEvent: MouseEvent) => {
  const svg = mouseEvent.target as SVGSVGElement;
  const { width, height } = svg.viewBox.baseVal;
  const { clientWidth, clientHeight } = svg;
  return {
    x: (width / clientWidth) * mouseEvent.offsetX,
    y: (height / clientHeight) * mouseEvent.offsetY,
  };
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  flames: Flame[] = [];

  add(e: MouseEvent) {
    const { x, y } = getPoint(e);
    this.flames.push(new Flame({ birthDate: new Date(), x, y }));
  }

  remove(flame: Flame) {
    this.flames.splice(this.flames.indexOf(flame), 1);
  }

  trackByFn(i: number, item: Flame) {
    return item;
  }
}
