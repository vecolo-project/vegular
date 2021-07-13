import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Invoice, Ride, Subscription, User} from '../../../shared/models';
import {Injectable} from '@angular/core';

export interface UsersState extends EntityState<User, number> {
  count: number;
  editUser: User;
  viewUserRides: Ride[];
  viewUserSubscriptions: Subscription[];
  viewUserInvoices: Invoice[];
  viewUserRidesCount: number;
  viewUserSubscriptionsCount: number;
  viewUserInvoicesCount: number;
}

export function createInitialState(): UsersState {
  return {
    count: 0,
    editUser: undefined,
    viewUserRides: [],
    viewUserSubscriptions: [],
    viewUserInvoices: [],
    viewUserRidesCount: 0,
    viewUserSubscriptionsCount: 0,
    viewUserInvoicesCount: 0
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'users'})
export class UsersStore extends EntityStore<UsersState, User> {
  constructor() {
    super(createInitialState());
  }
}
