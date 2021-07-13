import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileDashboardComponent} from './components/profile-dashboard/profile-dashboard.component';
import {SharedModule} from '../../shared/shared.module';
import {ProfileRoutingModule} from './profile-routing.module';
import { ProfileComponent } from './container/profile/profile.component';
import { VerticalNavComponent } from './components/vertical-nav/vertical-nav.component';


@NgModule({
  declarations: [
    ProfileDashboardComponent,
    ProfileComponent,
    VerticalNavComponent
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
