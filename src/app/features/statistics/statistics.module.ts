import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatisticsRoutingModule} from './statistics-routing.module';
import {StatisticsComponent} from './containers/statistics/statistics.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule {
}
