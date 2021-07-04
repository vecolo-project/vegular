import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubscriptionsComponent} from "./containers/subscriptions/subscriptions.component";

const subscriptionsRoutes: Routes = [
  {path: '', component: SubscriptionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(subscriptionsRoutes)],
  exports: [RouterModule]
})
export class SubscriptionsRoutingModule {
}
