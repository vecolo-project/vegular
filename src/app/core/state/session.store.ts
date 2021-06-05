import {Injectable} from '@angular/core';
import {EntityStore, Store, StoreConfig} from '@datorama/akita';
import {User} from '../../shared/models/user.model';

export interface SessionState {
  user: User | null;
  token: string | null;
}

export function createInitialState(): SessionState {
  return {
    user: null,
    token: null
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'session'})
export class SessionStore extends Store<SessionState> {

  constructor() {
    super(createInitialState());
  }

  public setUser(user: User): void {
    this.update({user});
  }

  public setToken(token: string): void {
    this.update({token});
  }

  public logout(): void {
    this.update(createInitialState);
  }
}
