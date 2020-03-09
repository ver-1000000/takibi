/**
 * 炎クラス。
 *
 * TODO: birthDateが規定の時間を超えると消火される。
 */
export class Flame {
  birthDate: Date;
  /** 炎の色相。 0-360の値を取る。 */
  hue: number;

  x: number;

  y: number;

  constructor(opt: Omit<Flame, 'birthDate' | 'hue'>) {
    this.birthDate = new Date();
    this.hue = Math.ceil(Math.random() * 360);
    this.x = opt.x;
    this.y = opt.y;
  }
}
