import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Plan } from 'src/app/shared/models';

export interface ProfileState extends EntityState<Plan, number> {
  userPlan: number | null;
  activePlans: Plan[];
}

export function createInitialState(): ProfileState {
  return {
    activePlans: [],
    userPlan: null,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'profile' })
export class ProfileStore extends EntityStore<ProfileState, Plan> {
  constructor() {
    super(createInitialState());
  }
}
