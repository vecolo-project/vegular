import {Injectable} from '@angular/core';
import {SessionStore} from './session.store';
import {RouterNavigation} from '../router/router.navigation';
import {User} from '../../shared/models/user.model';
import {HttpClientWrapper} from '../utils/httpClientWrapper';
import {API_RESSOURCE_URI} from '../../shared/api-ressource-uri/api-ressource-uri';
import {Snackbar} from '../../shared/snackbar/snakbar';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(
    private routerNavigation: RouterNavigation,
    private sessionStore: SessionStore,
    private http: HttpClientWrapper,
    private snackBar: Snackbar
  ) {}

  async login(email: string, password: string): Promise<void> {
    try {
      const response = await this.http.post<{ user: User; token: string }>(
        API_RESSOURCE_URI.LOGIN,
        {
          email,
          password,
        }
      );
      this.sessionStore.setUser(response.user);
      this.sessionStore.setToken(response.token);
      this.routerNavigation.gotoHome();
      this.snackBar.success('vous êtes maintenant connecté');
    } catch (e) {
      this.snackBar.warnning('Erreur de connexion : ' + e.error.error);
    }
  }

  logout(): void {
    this.sessionStore.logout();
    this.routerNavigation.gotoHome();
  }
}
