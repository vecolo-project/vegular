import {Store, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {Ride} from 'src/app/shared/models';

export interface UserRideState {
  currentRide: Ride
}

export function createInitialState(): UserRideState {
  return {
    currentRide: undefined
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'user-ride'})
export class UserRideStore extends Store<UserRideState> {
  constructor() {
    super(createInitialState());
  }
}
