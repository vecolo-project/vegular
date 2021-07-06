import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Plan} from "../../../../shared/models";

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent implements OnInit {

  @Input()
  planList: Plan[];

  @Input()
  planCount: number;

  @Input()
  isAdmin: boolean;

  @Output()
  getPlans = new EventEmitter<{ limit: number, offset: number }>();

  @Output()
  viewPlan = new EventEmitter<number>();

  displayedColumns = [
    'id',
    'name',
    'priceMonth',
    'freeMinutes',
    'priceRide',
    'active'
  ]

  constructor() {
  }

  ngOnInit(): void {
    this.getPlansF(10, 0);
  }

  onViewPlan(plan: Plan) {
    this.viewPlan.emit(plan.id);
  }

  getPlansF(limit: number, offset: number) {
    setTimeout(() => this.getPlans.emit({limit, offset}));
  }
}
