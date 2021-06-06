import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubscriptionComponent} from '../user-subscription/containers/subscription/subscription.component';

const subscriptionsRoutes: Routes = [
  {path: '', component: SubscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(subscriptionsRoutes)],
  exports: [RouterModule]
})
export class SubscriptionsRoutingModule {
}
