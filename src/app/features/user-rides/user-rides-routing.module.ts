import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewRideComponent} from './containers/new-ride/new-ride.component';
import {UserRidesComponent} from './containers/user-rides/user-rides.component';

const userRideRoutes: Routes = [
  {path: '', component: UserRidesComponent},
  {path: 'new', component: NewRideComponent},
];

@NgModule({
  imports: [RouterModule.forChild(userRideRoutes)],
  exports: [RouterModule]
})
export class UserRideRoutingModule {
}
