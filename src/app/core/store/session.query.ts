import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';
import {SessionState, SessionStore} from './session.store';
import {Role, User} from '../../shared/models/user.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class SessionQuery extends Query<SessionState> {
  selectUser$: Observable<User> = this.select('user');
  selectToken$: Observable<string> = this.select('token');
  isLoggedIn$: Observable<boolean> = this.select('user').pipe(map(user => user !== null));
  isStaff$: Observable<boolean> = this.select('user').pipe(map(user => user !== null && (user.role === Role.STAFF || user.role === Role.ADMIN)));
  isAdmin$: Observable<boolean> = this.select('user').pipe(map(user => user !== null && user.role === Role.ADMIN));

  constructor(protected store: SessionStore) {
    super(store);
  }

  getToken(): string {
    return this.getValue().token;
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
