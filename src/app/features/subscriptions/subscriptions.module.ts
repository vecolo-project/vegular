import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubscriptionsComponent} from './containers/subscriptions/subscriptions.component';
import {SubscriptionsRoutingModule} from './subscriptions-routing.module';
import { PlanListComponent } from './components/plan-list/plan-list.component';
import { SubscriptionListComponent } from './components/subscription-list/subscription-list.component';
import {SharedModule} from "../../shared/shared.module";
import { SubscriptionViewComponent } from './components/subscription-view/subscription-view.component';
import { PlanViewComponent } from './components/plan-view/plan-view.component';
import { PlanAddComponent } from './components/plan-add/plan-add.component';
import { SubscriptionAddComponent } from './components/subscription-add/subscription-add.component';


@NgModule({
  declarations: [
    SubscriptionsComponent,
    PlanListComponent,
    SubscriptionListComponent,
    SubscriptionViewComponent,
    PlanViewComponent,
    PlanAddComponent,
    SubscriptionAddComponent
  ],
  imports: [
    SubscriptionsRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class SubscriptionsModule {
}
