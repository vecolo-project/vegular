import {Injectable} from '@angular/core';
import {HashMap, QueryEntity} from '@datorama/akita';
import {Observable} from 'rxjs';
import {Subscription} from 'src/app/shared/models';
import {SubscriptionsStore, SubscriptionState} from "./subscriptions.store";

@Injectable({providedIn: 'root'})
export class SubscriptionsQuery extends QueryEntity<SubscriptionState, Subscription> {
  selectSubscriptions$: Observable<HashMap<Subscription>> = this.select('entities');
  selectSubscriptionsArray$: Observable<Subscription[]> = this.selectAll();
  selectViewSubscription$: Observable<Subscription> = this.select('viewSubscription');
  selectIds$: Observable<number[]> = this.select('ids');
  selectCount$: Observable<number> = this.select('count');
  isLoading$: Observable<boolean> = this.select('loading');

  constructor(protected store: SubscriptionsStore) {
    super(store);
  }

  setViewSubscription(id: number): void {
    this.store.update({viewSubscription: this.getEntity(id)});
  }
}
