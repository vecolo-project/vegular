import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileDashboardComponent} from './components/profile-dashboard/profile-dashboard.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    ProfileDashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProfileDashboardComponent
  ]
})
export class ProfileModule {
}
