import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subscription} from "../../../../shared/models";

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.scss']
})
export class SubscriptionListComponent implements OnInit {

  @Input()
  subscriptionList: Subscription[];

  @Input()
  subscriptionCount: number;

  @Output()
  getSubscriptions = new EventEmitter<{ limit: number, offset: number; }>();

  @Output()
  viewSubscription = new EventEmitter<number>();

  displayedColumns = [
    'id',
    'user',
    'start',
    'duration',
    'autoRenew',
    'plan'
  ]

  constructor() {
  }

  ngOnInit(): void {
    this.getSubscriptionsF(10, 0);
  }

  onViewSubscription(subscription: Subscription) {
    this.viewSubscription.emit(subscription.id);
  }

  getSubscriptionsF(limit: number, offset: number) {
    setTimeout(() => this.getSubscriptions.emit({limit, offset}));
  }
}
