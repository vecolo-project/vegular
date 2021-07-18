import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserRidesComponent} from './containers/user-rides/user-rides.component';

const userRideRoutes: Routes = [
  {path: '', component: UserRidesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(userRideRoutes)],
  exports: [RouterModule]
})
export class UserRideRoutingModule {
}
