import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubscriptionComponent} from './containers/subscription/subscription.component';
import {UserSubscriptionRoutingModule} from './user-subscription-routing.module';


@NgModule({
  declarations: [
    SubscriptionComponent
  ],
  imports: [
    UserSubscriptionRoutingModule,
    CommonModule
  ]
})
export class UserSubscriptionModule {
}
