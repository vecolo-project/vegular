import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { BikeManufacturer } from 'src/app/shared/models/bike-manufacturer';

export interface BikeManufacturerState
  extends EntityState<BikeManufacturer, number> {
  count: number;
  editManufacturer: BikeManufacturer;
}

export function createInitialState(): BikeManufacturerState {
  return {
    count: 0,
    editManufacturer: undefined,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'BikeManufacturer' })
export class BikeManufacturerStore extends EntityStore<
  BikeManufacturerState,
  BikeManufacturer
> {
  constructor() {
    super(createInitialState());
  }
}
