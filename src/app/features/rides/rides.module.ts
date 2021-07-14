import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {RidesRoutingModule} from './rides-routing.module';
import { RidesComponent } from './containers/rides/rides.component';



@NgModule({
  declarations: [
    RidesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RidesRoutingModule
  ]
})
export class RidesModule { }
