import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../user-dashboard/containers/dashboard/dashboard.component';
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
