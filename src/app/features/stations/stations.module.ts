import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StationsComponent} from './containers/stations/stations.component';
import {StationsRoutingModule} from './stations-routing.module';
import {StationsListComponent} from './components/stations-list/stations-list.component';
import {StationsViewComponent} from './components/stations-view/stations-view.component';
import {SharedModule} from "../../shared/shared.module";
import {StationChartComponent} from './components/station-charts/station-chart.component';
import { AddressSearchComponent } from './components/address-search/address-search.component';
import { StationCreateComponent } from './components/station-create/station-create.component';


@NgModule({
  declarations: [
    StationsComponent,
    StationsListComponent,
    StationsViewComponent,
    StationChartComponent,
    AddressSearchComponent,
    StationCreateComponent,
  ],
    imports: [
        StationsRoutingModule,
        CommonModule,
        SharedModule
    ]
})
export class StationsModule {
}
