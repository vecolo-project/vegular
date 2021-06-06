import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RidesComponent} from './containers/rides/rides.component';
import {UserRideRoutingModule} from './user-rides-routing.module';
import { NewRideComponent } from './containers/new-ride/new-ride.component';


@NgModule({
  declarations: [
    RidesComponent,
    NewRideComponent
  ],
  imports: [
    UserRideRoutingModule,
    CommonModule
  ]
})
export class UserRidesModule {
}
