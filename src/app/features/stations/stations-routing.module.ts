import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StationsComponent} from './containers/stations/stations.component';
import {StaffGuardService} from "../../core/guards/staff-guard.service";

const stationsRoutes: Routes = [
  {path: '', component: StationsComponent, canActivate: [StaffGuardService]},
  {path: 'view/:id', component: StationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(stationsRoutes)],
  exports: [RouterModule]
})
export class StationsRoutingModule {
}
