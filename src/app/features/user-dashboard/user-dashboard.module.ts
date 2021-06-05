import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './containers/dashboard/dashboard.component';
import {UserDashboardRoutingModule} from './user-dashboard-routing.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    UserDashboardRoutingModule,
    CommonModule
  ]
})
export class UserDashboardModule {
}
