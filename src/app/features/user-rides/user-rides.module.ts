import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRideRoutingModule } from './user-rides-routing.module';
import { UserRidesComponent } from './containers/user-rides/user-rides.component';
import { EndRideComponent } from './components/end-ride/end-ride.component';
import { NewRideComponent } from './components/new-ride/new-ride.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [UserRidesComponent, NewRideComponent, EndRideComponent],
  imports: [UserRideRoutingModule, CommonModule, SharedModule],
})
export class UserRidesModule {}
