import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StationsComponent} from './containers/stations/stations.component';

const stationsRoutes: Routes = [
  {path: '', component: StationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(stationsRoutes)],
  exports: [RouterModule]
})
export class StationsRoutingModule {
}
