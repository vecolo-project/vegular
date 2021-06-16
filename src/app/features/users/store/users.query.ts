import { Injectable } from '@angular/core';
import { UsersState, UsersStore } from './users.store';
import { HashMap, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { User } from '../../../shared/models/user.model';

@Injectable({ providedIn: 'root' })
export class UsersQuery extends QueryEntity<UsersState> {
  selectUsers$: Observable<HashMap<User>> = this.select('entities');
  selectIds$: Observable<number[]> = this.select('ids');
  selectCount$: Observable<number> = this.select('count');
  isLoading$: Observable<boolean> = this.select('loading');

  constructor(protected store: UsersStore) {
    super(store);
  }
}
