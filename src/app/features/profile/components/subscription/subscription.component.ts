import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { differenceInDays, addMonths } from 'date-fns';
import { Plan, Subscription, User } from 'src/app/shared/models';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent implements OnInit {
  @Output()
  getPlans = new EventEmitter<void>();

  @Output()
  subscribeToPlan = new EventEmitter<{ plan: Plan; autoRenew: boolean }>();

  @Output()
  cancelSubscription = new EventEmitter<Subscription>();

  @Input()
  plans: Plan[];

  @Input()
  user: User;

  subscribtion: Subscription;

  numberOfDaysRemaining?: number; 

  constructor() {}

  ngOnInit(): void {
    this.getPlans.emit();
    if (this.user.subscriptions.length === 1) {
      this.subscribtion = this.user.subscriptions[0];
      this.numberOfDaysRemaining = differenceInDays(addMonths(new Date(this.subscribtion.startDate), this.subscribtion.monthDuration), new Date());
    }
  }
  subscribe(plan: { plan: Plan; autoRenew: boolean }): void {
    this.subscribeToPlan.emit(plan);
  }

  isSubscribeUser(): boolean {
    return this.user.subscriptions.length === 1;
  }

  unsubscribe(): void {
    this.cancelSubscription.emit(this.subscribtion);
  }
}

