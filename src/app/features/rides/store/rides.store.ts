import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Ride} from '../../../shared/models';
import {Injectable} from '@angular/core';

export interface RideState extends EntityState<Ride, number> {
  count: number;
  viewRide: Ride;
}

export function createInitialState(): RideState {
  return {
    count: 0,
    viewRide: undefined,
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'rides'})
export class RidesStore extends EntityStore<RideState, Ride> {
  constructor() {
    super(createInitialState());
  }
}
