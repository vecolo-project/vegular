import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {Bike, Ride} from 'src/app/shared/models';

export interface BikeState extends EntityState<Bike, number> {
  count: number;
  editBike: Bike;
  bikeRides: Ride[];
  bikeRidesCount: number;
}

export function createInitialState(): BikeState {
  return {
    count: 0,
    editBike: undefined,
    bikeRides: [],
    bikeRidesCount: 0
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'bike'})
export class BikeStore extends EntityStore<BikeState, Bike> {
  constructor() {
    super(createInitialState());
  }
}
