import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatisticsRoutingModule} from './statistics-routing.module';
import {StatisticsComponent} from './containers/statistics/statistics.component';
import {SharedModule} from '../../shared/shared.module';
import {SubscriptionsStatisticsComponent} from './components/subscriptions-statistics/subscriptions-statistics.component';
import {IncomesStatisticsComponent} from './components/incomes-statistics/incomes-statistics.component';
import {UserSubscriptionsStatisticsComponent} from './components/user-subscriptions-statistics/user-subscriptions-statistics.component';
import {RidesStatisticsComponent} from './components/rides-statistics/rides-statistics.component';
import {StationsStatisticsComponent} from './components/stations-statistics/stations-statistics.component';
import {BikesStatisticsComponent} from './components/bikes-statistics/bikes-statistics.component';
import {BikeStatusPipe} from '../../shared/pipes/BikeStatusPipe';


@NgModule({
  declarations: [
    StatisticsComponent,
    SubscriptionsStatisticsComponent,
    IncomesStatisticsComponent,
    UserSubscriptionsStatisticsComponent,
    RidesStatisticsComponent,
    StationsStatisticsComponent,
    BikesStatisticsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StatisticsRoutingModule
  ],
  providers: [
    BikeStatusPipe
  ]
})
export class StatisticsModule {
}
