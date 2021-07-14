import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRideRoutingModule} from './user-rides-routing.module';
import {NewRideComponent} from './containers/new-ride/new-ride.component';
import {UserRidesComponent} from './containers/user-rides/user-rides.component';


@NgModule({
  declarations: [
    UserRidesComponent,
    NewRideComponent
  ],
  imports: [
    UserRideRoutingModule,
    CommonModule
  ]
})
export class UserRidesModule {
}
