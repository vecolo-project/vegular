import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MapComponent} from './containers/map/map.component';

const mapRoutes: Routes = [
  {path: '', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forChild(mapRoutes)],
  exports: [RouterModule]
})
export class MapRoutingModule {
}
