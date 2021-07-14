import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from '../../../../shared/models';
import { Plan } from 'src/app/shared/models';

@Component({
  selector: 'app-subsribe-card',
  templateUrl: './subsribe-card.component.html',
  styleUrls: ['./subsribe-card.component.scss'],
})
export class SubsribeCardComponent implements OnInit {
  @Input()
  plan: Plan;

  @Input()
  subscription?: Subscription;

  renew: boolean = false;

  @Output()
  subscribeToPlan = new EventEmitter<{ plan: Plan; autoRenew: boolean }>();

  constructor() {}

  ngOnInit(): void {
    if (this.subscription) {
      this.renew = this.subscription.autoRenew;
    }
  }
  toggleRenew(): void {
    this.renew = !this.renew;
  }

  onSubscribe(): void {
    const subscription = { plan: this.plan, autoRenew: this.renew };
    this.subscribeToPlan.emit(subscription);
  }
}
