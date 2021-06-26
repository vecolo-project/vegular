import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StationsComponent} from './containers/stations/stations.component';
import {StationsRoutingModule} from './stations-routing.module';
import {StationsListComponent} from './components/stations-list/stations-list.component';
import {StationsViewComponent} from './components/stations-view/stations-view.component';
import {SharedModule} from "../../shared/shared.module";
import {StationBatteryChartComponent} from './components/station-charts/station-battery-chart.component';
import { AddressSearchComponent } from './components/address-search/address-search.component';


@NgModule({
  declarations: [
    StationsComponent,
    StationsListComponent,
    StationsViewComponent,
    StationBatteryChartComponent,
    AddressSearchComponent,
  ],
    imports: [
        StationsRoutingModule,
        CommonModule,
        SharedModule
    ]
})
export class StationsModule {
}
