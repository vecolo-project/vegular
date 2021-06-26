import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './containers/bikes/bikes.component';

const bikesRoutes: Routes = [{ path: '', component: BikesComponent }];

@NgModule({
  imports: [RouterModule.forChild(bikesRoutes)],
  exports: [RouterModule],
})
export class BikesRoutingModule {}
