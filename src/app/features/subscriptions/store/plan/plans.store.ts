import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {Plan} from 'src/app/shared/models';

export interface PlanState extends EntityState<Plan, number> {
  count: number;
  viewPlan: Plan;
}

export function createInitialState(): PlanState {
  return {
    count: 0,
    viewPlan: undefined,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'plan' })
export class PlansStore extends EntityStore<PlanState, Plan> {
  constructor() {
    super(createInitialState());
  }
}
