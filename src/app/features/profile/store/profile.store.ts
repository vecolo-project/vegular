import {Store, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {Invoice, Plan, Ride, Subscription} from 'src/app/shared/models';

export interface ProfileState {
  activePlans: Plan[];
  userRides: Ride[];
  userSubscriptions: Subscription[];
  userInvoices: Invoice[];
  userRideCount: number;
  userSubscriptionsCount: number;
  userInvoicesCount: number;

}

export function createInitialState(): ProfileState {
  return {
    activePlans: [],
    userRides: [],
    userSubscriptions: [],
    userInvoices: [],
    userRideCount: 0,
    userSubscriptionsCount: 0,
    userInvoicesCount: 0
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'profile'})
export class ProfileStore extends Store<ProfileState> {
  constructor() {
    super(createInitialState());
  }
}
