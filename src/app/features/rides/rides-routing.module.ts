import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RidesComponent} from './containers/rides/rides.component';

const ridesRoutes: Routes = [
  {path: '', component: RidesComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(ridesRoutes)
  ],
  exports: [RouterModule]
})
export class RidesRoutingModule {
}
