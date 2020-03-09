/** 炎クラス。 */
export class Flame {
  id: string | null;
  /** 炎の色相。 0-360の値を取る。 */
  hue: number;

  x: number;

  y: number;
  /** 最終更新日。 */
  updatedAt: Date;

  constructor(opt: Partial<Flame> = {}) {
    this.id = opt.id ?? null;
    this.updatedAt = new Date();
    this.hue = opt.hue ?? Math.ceil(Math.random() * 360);
    this.x = opt.x ?? 0;
    this.y = opt.y ?? 0;
  }
}
