import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/** 火種となるcircle要素の情報。 */
interface FireSeed {
  id: number;
  cx: number;
  cy: number;
}

/** 火種の基準大きさ。 */
const VOLUME = 30;
/** 火種の数。 */
const SIZE = 40;
/** 炎のアニメーション寿命。 */
const DURATION = 1500;

/** UUIDを取得する。 */
const getUUID = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

/** 火種群を作成する。 */
const getFireSeeds = (): FireSeed[] => {
  const random = () => Math.ceil(Math.random() * VOLUME);
  return [...Array(SIZE)].map((_, i) => ({
    id: i,
    cx: random(),
    cy: random(),
  }));
};

/**
 * 炎コンポーネント。
 */
@Component({
  selector: '[appFlame]',
  templateUrl: './flame.component.html',
  styleUrls: ['./flame.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlameComponent {
  readonly id = getUUID();
  readonly fireSeeds = getFireSeeds();
  readonly VOLUME = VOLUME;
  readonly DURATION = DURATION;
  @Input() hue = 0;
}
