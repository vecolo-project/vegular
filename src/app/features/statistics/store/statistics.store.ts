import {Store, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {BikesStatistics, IncomeStatistics, RidesStatistics, StationsStatistics, SubscriptionStatistics} from '../../../shared/models';

export interface StatisticsState {
  subscriptions: SubscriptionStatistics[];
  incomes: IncomeStatistics;
  usersSubscriptions: number;
  rides: RidesStatistics[];
  stations: StationsStatistics;
  bikes: BikesStatistics[];
}

export function createInitialState(): StatisticsState {
  return {
    subscriptions: [],
    incomes: undefined,
    usersSubscriptions: 0,
    rides: [],
    stations: undefined,
    bikes: []
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'statistics'})
export class StatisticsStore extends Store<StatisticsState> {
  constructor() {
    super(createInitialState());
  }
}
