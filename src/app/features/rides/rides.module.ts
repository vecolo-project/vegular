import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {RidesRoutingModule} from './rides-routing.module';
import { RidesComponent } from './containers/rides/rides.component';
import { RideListComponent } from './components/ride-list/ride-list.component';
import { RideViewComponent } from './components/ride-view/ride-view.component';
import { RideAddComponent } from './components/ride-add/ride-add.component';



@NgModule({
  declarations: [
    RidesComponent,
    RideListComponent,
    RideViewComponent,
    RideAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RidesRoutingModule
  ]
})
export class RidesModule { }
