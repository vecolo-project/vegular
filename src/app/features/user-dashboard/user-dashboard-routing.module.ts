import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './containers/dashboard/dashboard.component';

const userDashboardRoutes: Routes = [
  {path: '', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(userDashboardRoutes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule {
}
