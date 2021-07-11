import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BikesComponent} from './containers/bikes/bikes.component';
import {StaffGuardService} from '../../core/guards/staff-guard.service';

const bikesRoutes: Routes = [
  {path: '', component: BikesComponent, canActivate: [StaffGuardService]},
  {path: 'manufacturer/add', component: BikesComponent, canActivate: [StaffGuardService]},
  {path: 'manufacturer/edit/:id', component: BikesComponent, canActivate: [StaffGuardService]},
  {path: 'model/add', component: BikesComponent, canActivate: [StaffGuardService]},
  {path: 'model/edit/:id', component: BikesComponent, canActivate: [StaffGuardService]},
  {path: 'add', component: BikesComponent, canActivate: [StaffGuardService]},
  {path: 'edit/:id', component: BikesComponent, canActivate: [StaffGuardService]},
  {path: 'view/:id', component: BikesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(bikesRoutes)],
  exports: [RouterModule],
})
export class BikesRoutingModule {
}
