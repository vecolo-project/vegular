import {Injectable} from '@angular/core';
import {Query, QueryEntity} from '@datorama/akita';
import {SessionStore, SessionState} from './session.store';

@Injectable({providedIn: 'root'})
export class SessionQuery extends Query<SessionState> {
  selectUser$ = this.select('user');

  constructor(protected store: SessionStore) {
    super(store);
  }

}
