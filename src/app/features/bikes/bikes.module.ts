import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BikesComponent} from './containers/bikes/bikes.component';
import {BikesRoutingModule} from './bikes-routing.module';


@NgModule({
  declarations: [
    BikesComponent
  ],
  imports: [
    CommonModule,
    BikesRoutingModule
  ]
})
export class BikesModule {
}
