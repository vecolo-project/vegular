import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { User } from '../../../shared/models/user.model';
import { Injectable } from '@angular/core';

export interface UsersState extends EntityState<User, number> {
  count: number;
}

export function createInitialState(): UsersState {
  return {
    count: 0,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'users' })
export class UsersStore extends EntityStore<UsersState, User> {
  constructor() {
    super(createInitialState());
  }
}
