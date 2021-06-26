import { Injectable } from '@angular/core';
import { HashMap, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { BikeManufacturer } from 'src/app/shared/models';
import {
  BikeManufacturerState,
  BikeManufacturerStore,
} from './manufacturer.store';

@Injectable({ providedIn: 'root' })
export class BikeManufacturerQuery extends QueryEntity<
  BikeManufacturerState,
  BikeManufacturer
> {
  selectManufacturer$: Observable<HashMap<BikeManufacturer>> =
    this.select('entities');
  selectManufacturerArray$: Observable<BikeManufacturer[]> = this.selectAll();
  selectEditManufacturer$: Observable<BikeManufacturer> =
    this.select('editManufacturer');
  selectIds$: Observable<number[]> = this.select('ids');
  selectCount$: Observable<number> = this.select('count');
  isLoading$: Observable<boolean> = this.select('loading');

  constructor(protected store: BikeManufacturerStore) {
    super(store);
  }

  setEditManufacturer(id: number): void {
    this.store.update({ editManufacturer: this.getEntity(id) });
  }
}
