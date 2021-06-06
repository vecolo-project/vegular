import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubscriptionComponent} from './containers/subscription/subscription.component';

const userSubscriptionRoutes: Routes = [
  {path: '', component: SubscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(userSubscriptionRoutes)],
  exports: [RouterModule]
})
export class UserSubscriptionRoutingModule {
}
