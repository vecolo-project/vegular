import {Injectable} from '@angular/core';
import {StatisticsState, StatisticsStore} from './statistics.store';
import {Query} from '@datorama/akita';
import {Observable} from 'rxjs';
import {BikesStatistics, IncomeStatistics, RidesStatistics, StationsStatistics, SubscriptionStatistics} from '../../../shared/models';

@Injectable({providedIn: 'root'})
export class StatisticsQuery extends Query<StatisticsState> {
  selectSubscriptions$: Observable<SubscriptionStatistics[]> = this.select('subscriptions');
  selectIncomes$: Observable<IncomeStatistics> = this.select('incomes');
  selectUserSubscriptions$: Observable<number> = this.select('usersSubscriptions');
  selectRides$: Observable<RidesStatistics[]> = this.select('rides');
  selectStations$: Observable<StationsStatistics> = this.select('stations');
  selectBikes$: Observable<BikesStatistics[]> = this.select('bikes');

  constructor(protected store: StatisticsStore) {
    super(store);
  }
}
