import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './containers/bikes/bikes.component';

const bikesRoutes: Routes = [
  { path: '', component: BikesComponent },
  { path: 'manufacturer/add', component: BikesComponent },
  { path: 'manufacturer/edit/:id', component: BikesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(bikesRoutes)],
  exports: [RouterModule],
})
export class BikesRoutingModule {}
