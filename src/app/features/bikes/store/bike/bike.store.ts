import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {Bike} from 'src/app/shared/models';

export interface BikeState extends EntityState<Bike, number> {
  count: number;
  editBike: Bike;
}

export function createInitialState(): BikeState {
  return {
    count: 0,
    editBike: undefined,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'bike' })
export class BikeStore extends EntityStore<BikeState, Bike> {
  constructor() {
    super(createInitialState());
  }
}
