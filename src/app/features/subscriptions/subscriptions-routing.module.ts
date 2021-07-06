import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubscriptionsComponent} from "./containers/subscriptions/subscriptions.component";
import {AdminGuardService} from "../../core/guards/admin-guard.service";

const subscriptionsRoutes: Routes = [
  {path: '', component: SubscriptionsComponent},
  {path: 'plan/add', component: SubscriptionsComponent, canActivate: [AdminGuardService]},
  {path: 'add', component: SubscriptionsComponent},
  {path: 'plan/view/:id', component: SubscriptionsComponent},
  {path: 'view/:id', component: SubscriptionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(subscriptionsRoutes)],
  exports: [RouterModule]
})
export class SubscriptionsRoutingModule {
}
