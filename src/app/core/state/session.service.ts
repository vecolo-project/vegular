import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';
import { RouterNavigation } from '../router/router.navigation';
import axios from 'axios';

@Injectable({ providedIn: 'root' })
export class SessionService {
  endPoint = 'http://localhost:4562/api';

  constructor(
    private routerNavigation: RouterNavigation,
    private sessionStore: SessionStore
  ) {}

  async login(email: string, password: string): Promise<void> {
    const user = await axios.post(this.endPoint + '/auth/login', {
      email: email,
      password: password,
    });
    console.log(user);
    this.sessionStore.setUser(user.data.user);
    this.sessionStore.setToken(user.data.token);
    this.routerNavigation.gotoProfile();
  }

  logout(): void {
    this.sessionStore.logout();
    this.routerNavigation.gotoLogin();
  }
}
