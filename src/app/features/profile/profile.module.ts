import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileDashboardComponent} from './components/profile-dashboard/profile-dashboard.component';
import {SharedModule} from '../../shared/shared.module';
import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './container/profile/profile.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';
import {SubscriptionComponent} from './components/subscription/subscription.component';
import {SubsribeCardComponent} from './components/subsribe-card/subsribe-card.component';
import {UsersModule} from '../users/users.module';

@NgModule({
  declarations: [
    ProfileDashboardComponent,
    ProfileComponent,
    EditProfileComponent,
    SubscriptionComponent,
    SubsribeCardComponent,
  ],
  imports: [ProfileRoutingModule, CommonModule, SharedModule, UsersModule],
  exports: [ProfileDashboardComponent],
})
export class ProfileModule {
}
