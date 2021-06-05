import {Injectable} from '@angular/core';
import {SessionStore} from './session.store';
import {RouterNavigation} from '../router/router.navigation';
import {User} from '../../shared/models/user.model';
import {HttpClientWrapper} from '../utils/httpClientWrapper';
import {API_RESSOURCE_URI} from '../../shared/api-ressource-uri/api-ressource-uri';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({providedIn: 'root'})
export class SessionService {
  constructor(
    private routerNavigation: RouterNavigation,
    private sessionStore: SessionStore,
    private http: HttpClientWrapper,
    private snackBar: MatSnackBar
  ) {
  }

  async login(email: string, password: string): Promise<void> {
    try {
      const response = await this.http.post<{ user: User, token: string }>(API_RESSOURCE_URI.LOGIN, {
        email,
        password
      });
      this.sessionStore.setUser(response.user);
      this.sessionStore.setToken(response.token);
      this.routerNavigation.gotoProfile();
    } catch (e) {
      this.snackBar.open('Erreur de connexion : ' + e.error.error, '',
        {
          duration: 3000,
          panelClass: ['bg-red-400']
        });
    }
  }

  logout(): void {
    this.sessionStore.logout();
    this.routerNavigation.gotoHome();
  }
}
