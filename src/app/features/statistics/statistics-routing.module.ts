import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StatisticsComponent} from './containers/statistics/statistics.component';

const statisticsRoutes: Routes = [
  {path: '', component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(statisticsRoutes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule {
}
