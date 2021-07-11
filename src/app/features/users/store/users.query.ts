import {Injectable} from '@angular/core';
import {UsersState, UsersStore} from './users.store';
import {HashMap, QueryEntity} from '@datorama/akita';
import {Observable} from 'rxjs';
import {Invoice, Ride, Subscription, User} from '../../../shared/models';

@Injectable({providedIn: 'root'})
export class UsersQuery extends QueryEntity<UsersState, User> {
  selectUsers$: Observable<HashMap<User>> = this.select('entities');
  selectUsersArray$: Observable<User[]> = this.selectAll();
  selectEditUsers$: Observable<User> = this.select('editUser');
  selectViewUserRides$: Observable<Ride[]> = this.select('viewUserRides');
  selectViewUserSubscriptions$: Observable<Subscription[]> = this.select('viewUserSubscriptions');
  selectViewUserInvoices: Observable<Invoice[]> = this.select('viewUserInvoices');
  selectIds$: Observable<number[]> = this.select('ids');
  selectCount$: Observable<number> = this.select('count');
  isLoading$: Observable<boolean> = this.select('loading');

  constructor(protected store: UsersStore) {
    super(store);
  }

  setEditUser(id: number): void {
    this.store.update({editUser: this.getEntity(id)});
  }
}
