import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RidesComponent} from './containers/rides/rides.component';
import {NewRideComponent} from './containers/new-ride/new-ride.component';

const userRideRoutes: Routes = [
  {path: '', component: RidesComponent},
  {path: 'new', component: NewRideComponent},
];

@NgModule({
  imports: [RouterModule.forChild(userRideRoutes)],
  exports: [RouterModule]
})
export class UserRideRoutingModule {
}
