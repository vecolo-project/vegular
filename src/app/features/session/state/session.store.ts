import {Injectable} from '@angular/core';
import {EntityStore, Store, StoreConfig} from '@datorama/akita';
import {User} from '../models/user.model';

export interface SessionState {
  user: User | null;
}

export function createInitialState(): SessionState {
  return {
    user: null
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'session'})
export class SessionStore extends Store<SessionState> {

  constructor() {
    super(createInitialState());
  }

  public setUser(user: User): void {
    this.update({user: {username: user.username, email: user.email  }});
  }
}
