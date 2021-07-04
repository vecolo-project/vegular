import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {Subscription} from "../../../../shared/models";

export interface SubscriptionState
  extends EntityState<Subscription, number> {
  count: number;
  viewSubscription: Subscription;
}

export function createInitialState(): SubscriptionState {
  return {
    count: 0,
    viewSubscription: undefined,
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'subscription'})
export class SubscriptionsStore extends EntityStore<SubscriptionState, Subscription> {
  constructor() {
    super(createInitialState());
  }
}
