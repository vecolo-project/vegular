import {Injectable} from '@angular/core';
import {SessionStore} from './session.store';
import {RouterNavigation} from '../router/router.navigation';

@Injectable({providedIn: 'root'})
export class SessionService {

  constructor(private routerNavigation: RouterNavigation, private sessionStore: SessionStore) {
  }

  login(email: string, password: string): void {
    if (password !== 'esgi') {
      console.log('Invalid password !');
      return;
    }
    this.sessionStore.setUser({email, username: 'Nospy'});
    this.sessionStore.setToken('token-secret-jwt');
    this.routerNavigation.gotoProfile();
  }

  logout(): void {
    this.sessionStore.logout();
    this.routerNavigation.gotoLogin();
  }


}
