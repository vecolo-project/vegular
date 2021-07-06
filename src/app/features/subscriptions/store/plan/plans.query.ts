import {Injectable} from '@angular/core';
import {HashMap, QueryEntity} from '@datorama/akita';
import {Observable} from 'rxjs';
import {Plan} from 'src/app/shared/models';
import {PlanState, PlansStore} from './plans.store';

@Injectable({providedIn: 'root'})
export class PlansQuery extends QueryEntity<PlanState, Plan> {
  selectPlans$: Observable<HashMap<Plan>> = this.select('entities');
  selectPlanArray$: Observable<Plan[]> = this.selectAll();
  selectViewPlan$: Observable<Plan> = this.select('viewPlan');
  selectIds$: Observable<number[]> = this.select('ids');
  selectCount$: Observable<number> = this.select('count');
  isLoading$: Observable<boolean> = this.select('loading');

  constructor(protected store: PlansStore) {
    super(store);
  }

  setViewPlan(id: number): void {
    this.store.update({viewPlan: this.getEntity(id)});
  }
}
