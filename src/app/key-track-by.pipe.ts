import { Pipe, PipeTransform, TrackByFunction } from '@angular/core';

/**
 * `{ id: number, name: string }[]`のような、ユニークな値を持つオブジェクトの配列に対して、
 * 簡単に{@link https://angular.io/api/core/TrackByFunction TrackByFunction}を設定するためのパイプ。
 *
 * @example
 * <!-- `{ id: number, name: string }[]` -->
 * <div *ngFor="let item of items; trackBy: 'id' | keyTrackBy">{{ item.id }}: {{ item.name }}</div>
 *
 * <!-- `{ id: number | null, name: string | null }[]` 実際は↑の型じゃなくて←みたいな型になりがちだよね、、、 -->
 * <input name="name" [(ngModel)]="item.name" *ngFor="let item of items; trackBy: null | keyTrackBy">
 */
@Pipe({ name: 'keyTrackBy' })
export class KeyTrackByPipe implements PipeTransform {
  transform<T>(key: null | keyof T): TrackByFunction<T> {
    return (i: number, item: T) => (key == null ? item : item[key]);
  }
}
