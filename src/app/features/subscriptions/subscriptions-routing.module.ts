import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubscriptionsComponent} from "./containers/subscriptions/subscriptions.component";
import {PlanViewComponent} from "./components/plan-view/plan-view.component";
import {PlanAddComponent} from "./components/plan-add/plan-add.component";
import {SubscriptionAddComponent} from "./components/subscription-add/subscription-add.component";
import {SubscriptionViewComponent} from "./components/subscription-view/subscription-view.component";

const subscriptionsRoutes: Routes = [
  {path: '', component: SubscriptionsComponent},
  {path: '/plan/view/:id', component: PlanViewComponent},
  {path: '/plan/add', component: PlanAddComponent},
  {path: '/view/:id', component: SubscriptionViewComponent},
  {path: '/add', component: SubscriptionAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(subscriptionsRoutes)],
  exports: [RouterModule]
})
export class SubscriptionsRoutingModule {
}
