import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';
import {SessionState, SessionStore} from './session.store';
import {Role, User} from '../../shared/models/user.model';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class SessionQuery extends Query<SessionState> {
  selectUser$: Observable<User> = this.select('user');
  selectToken$: Observable<string> = this.select('token');

  constructor(protected store: SessionStore) {
    super(store);
  }

  isLoggedIn(): boolean {
    return this.getValue().user !== null;
  }

  isAdmin(): boolean {
    return this.isLoggedIn() && this.getValue().user.role === Role.ADMIN;
  }

  isStaff(): boolean {
    return this.isLoggedIn() && (this.getValue().user.role === Role.STAFF || this.getValue().user.role === Role.ADMIN);
  }
}
