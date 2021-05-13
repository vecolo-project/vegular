import {Injectable} from '@angular/core';
import {Query, QueryEntity, toBoolean} from '@datorama/akita';
import {SessionStore, SessionState} from './session.store';

@Injectable({providedIn: 'root'})
export class SessionQuery extends Query<SessionState> {
  selectUser$ = this.select('user');
  isLoggedIn$ = this.select(state => state.user !== null);

  constructor(protected store: SessionStore) {
    super(store);
  }

  isLoggedIn(): boolean {
    return this.getValue().user !== null;
  }

}
