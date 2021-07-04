import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RouterNavigation} from "../../../../core/router/router.navigation";
import {SessionQuery} from "../../../../core/store/session.query";
import {PlansQuery} from "../../store/plan/plans.query";
import {SubscriptionsQuery} from "../../store/subscription/subscriptions.query";
import {Plan, Subscription} from "../../../../shared/models";
import {Observable} from "rxjs";
import {PlansService} from "../../store/plan/plans.service";
import {SubscriptionsService} from "../../store/subscription/subscriptions.service";

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  viewPlan: Observable<Plan>;
  planList: Observable<Plan[]>;
  planCount: Observable<number>;
  viewSubscription: Observable<Subscription>
  subscriptionList: Observable<Subscription[]>;
  subscriptionCount: Observable<number>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routerNavigation: RouterNavigation,
    public planService: PlansService,
    private subscriptionService: SubscriptionsService,
    private plansQuery: PlansQuery,
    private subscriptionsQuery: SubscriptionsQuery,
    public sessionQuery: SessionQuery
  ) {
    this.viewPlan = this.plansQuery.selectViewPlan$;
    this.planList = this.plansQuery.selectPlanArray$;
    this.planCount = this.plansQuery.selectCount$;
    this.viewSubscription = this.subscriptionsQuery.selectViewSubscription$;
    this.subscriptionList = this.subscriptionsQuery.selectSubscriptionsArray$;
    this.subscriptionCount = this.subscriptionsQuery.selectCount$;
  }

  ngOnInit(): void {
    if (this.isPlanViewMode()) {
      const planId = Number.parseInt(this.route.snapshot.params.id);
      this.planService.getPlan(planId);
    }
  }

  isListMode(): boolean {
    return this.router.isActive('/subscriptions', true);
  }

  isPlanViewMode(): boolean {
    return this.router.isActive('/subscriptions/plan/view', false);
  }
  isPlanAddMode(): boolean {
    return this.router.isActive('/subscriptions/plan/add', true);
  }

  isSubscriptionViewMode(): boolean {
    return this.router.isActive('/subscriptions/view', false);
  }

  getPlans(limit: number, offset: number): void {
    this.planService.getPlans(limit, offset);
  }

  onViewPlan(id: number): void {
    this.plansQuery.setViewPlan(id);
    this.routerNavigation.gotoPlanView(id);
  }

  onCreatePlan(plan: Plan): void {
    this.planService.postPlan(plan);
  }

  onUpdatePlan(plan: Plan): void {
    this.planService.putPlan(plan);
  }

  onDeletePlan(id: number): void {
    this.planService.deletePlan(id);
  }

  getSubscriptions(limit: number, offset: number): void {
    this.subscriptionService.getSubscriptions(limit, offset);
  }

  onViewSubscription(id: number): void {
    this.subscriptionsQuery.setViewSubscription(id);
    this.routerNavigation.gotoSubscriptionView(id);
  }

  onCreateSubscription(subscription: Subscription): void {
    this.subscriptionService.postSubscription(subscription);
  }

  onUpdateSubscription(subscription: Subscription): void {
    this.subscriptionService.putSubscription(subscription);
  }

}
