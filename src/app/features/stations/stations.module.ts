import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StationsComponent} from './containers/stations/stations.component';
import {StationsRoutingModule} from './stations-routing.module';


@NgModule({
  declarations: [
    StationsComponent
  ],
  imports: [
    StationsRoutingModule,
    CommonModule
  ]
})
export class StationsModule {
}
