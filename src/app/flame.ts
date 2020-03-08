/**
 * 炎クラス。
 *
 * TODO: birthDateが規定の時間を超えると消火される。
 */
export class Flame {
  birthDate: Date;

  x: number;

  y: number;

  constructor(opt: Flame) {
    this.birthDate = opt.birthDate;
    this.x = opt.x;
    this.y = opt.y;
  }
}
