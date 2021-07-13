import {Component, OnInit} from '@angular/core';
import {StatisticsService} from '../../store/statistics.service';
import {StatisticsQuery} from '../../store/statistics.query';
import {Observable} from 'rxjs';
import {BikesStatistics, IncomeStatistics, RidesStatistics, StationsStatistics, SubscriptionStatistics} from '../../../../shared/models';
import {getMonth, getYear} from 'date-fns';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  subscriptions: Observable<SubscriptionStatistics[]>;
  incomes: Observable<IncomeStatistics>;
  userSubscriptions: Observable<number>;
  rides: Observable<RidesStatistics[]>;
  stations: Observable<StationsStatistics>;
  bikes: Observable<BikesStatistics[]>;


  constructor(statisticsQuery: StatisticsQuery,
              private statisticsService: StatisticsService) {
    this.subscriptions = statisticsQuery.selectSubscriptions$;
    this.incomes = statisticsQuery.selectIncomes$;
    this.userSubscriptions = statisticsQuery.selectUserSubscriptions$;
    this.rides = statisticsQuery.selectRides$;
    this.stations = statisticsQuery.selectStations$;
    this.bikes = statisticsQuery.selectBikes$;
  }

  ngOnInit(): void {
    const now = new Date();
    const month = getMonth(now) + 1;
    const year = getYear(now);
    this.onGetSubscriptionsStatistics();
    this.onGetIncomesStatistics(month, year);
    this.onGetUserSubscriptionsStatistics(month, year);
    this.onGetRidersStatistics(month, year);
    this.onGetStationStatistics();
    this.onGetBikesStatistics();
  }

  onGetSubscriptionsStatistics(): void {
    this.statisticsService.getSubscriptionsStatistics();
  }

  onGetIncomesStatistics(month: number, year: number): void {
    this.statisticsService.getMonthIncomesStatistics(month, year);
  }

  onGetUserSubscriptionsStatistics(month: number, year: number): void {
    this.statisticsService.getMonthUsersSubscriptionsStatistics(month, year);
  }

  onGetRidersStatistics(month: number, year: number): void {
    this.statisticsService.getMonthRidesStatistics(month, year);
  }

  onGetStationStatistics(): void {
    this.statisticsService.getStationsStatistics();
  }

  onGetBikesStatistics(): void {
    this.statisticsService.getBikesStatistics();
  }
}
