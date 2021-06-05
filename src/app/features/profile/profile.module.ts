import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileDashboardComponent} from './components/profile-dashboard/profile-dashboard.component';
import {SharedModule} from '../../shared/shared.module';
import {ProfileRoutingModule} from './profile-routing-module';


@NgModule({
  declarations: [
    ProfileDashboardComponent
  ],
  imports: [
    ProfileRoutingModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    ProfileDashboardComponent
  ]
})
export class ProfileModule {
}
