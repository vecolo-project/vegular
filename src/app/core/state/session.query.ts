import {Injectable} from '@angular/core';
import {Query, QueryEntity, toBoolean} from '@datorama/akita';
import {SessionStore, SessionState} from './session.store';
import {User} from '../../shared/models/user.model';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class SessionQuery extends Query<SessionState> {
  selectUser$: Observable<User> = this.select('user');
  selectToken$: Observable<string> = this.select('token');
  isLoggedIn$: Observable<boolean> = this.select((state) => state.user !== null);

  constructor(protected store: SessionStore) {
    super(store);
  }

  isLoggedIn(): boolean {
    return this.getValue().user !== null;
  }
}
