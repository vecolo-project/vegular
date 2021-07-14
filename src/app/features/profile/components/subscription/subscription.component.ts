import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Plan } from 'src/app/shared/models';

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

  @Input()
  plans: Plan[];

  constructor() {}

  ngOnInit(): void {
    this.getPlans.emit();
  }
  subscribe(plan: { plan: Plan; autoRenew: boolean }): void {
    this.subscribeToPlan.emit(plan);
  }
}
