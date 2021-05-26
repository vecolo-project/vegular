import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';
import { RouterNavigation } from '../router/router.navigation';
import { requestFactory, RequestFactory } from '../utils/requestFactory';
import { Request } from '../utils/request';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(
    private routerNavigation: RouterNavigation,
    private sessionStore: SessionStore
  ) {}

  async login(email: string, password: string): Promise<void> {
    const response = await new Request('/auth/login', requestFactory.post())
      .setBody({ email: email, password: password })
      .call();
    this.sessionStore.setUser(response.user);
    this.sessionStore.setToken(response.token);
    RequestFactory.addToken(response.token);
    this.routerNavigation.gotoProfile();
  }

  logout(): void {
    this.sessionStore.logout();
    this.routerNavigation.gotoLogin();
  }
}
