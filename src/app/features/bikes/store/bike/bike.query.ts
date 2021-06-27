import { Injectable } from '@angular/core';
import { HashMap, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Bike } from 'src/app/shared/models';
import { BikeState, BikeStore } from './bike.store';

@Injectable({ providedIn: 'root' })
export class BikeQuery extends QueryEntity<BikeState, Bike> {
  selectBike$: Observable<HashMap<Bike>> = this.select('entities');
  selectBikeArray$: Observable<Bike[]> = this.selectAll();
  selectEditBike$: Observable<Bike> = this.select('editBike');
  selectIds$: Observable<number[]> = this.select('ids');
  selectCount$: Observable<number> = this.select('count');
  isLoading$: Observable<boolean> = this.select('loading');

  constructor(protected store: BikeStore) {
    super(store);
  }

  setEditBike(id: number): void {
    this.store.update({ editBike: this.getEntity(id) });
  }
}
