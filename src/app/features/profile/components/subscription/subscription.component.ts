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

  @Input()
  plans: Plan[];

  constructor() {}

  ngOnInit(): void {
    this.getPlans.emit();
  }
}
