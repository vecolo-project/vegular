import { Injectable } from '@angular/core';
import { SessionStore } from 'src/app/core/store/session.store';
import { HttpClientWrapper } from 'src/app/core/utils/httpClientWrapper';
import { Subscription, User } from 'src/app/shared/models';
import { Snackbar } from 'src/app/shared/snackbar/snakbar';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
    private sessionStore: SessionStore
  ) {}

  async editUser(user: User): Promise<void> {
    try {
      const userRes = await this.http.put<User>('user/me', user);
      this.sessionStore.setUser(userRes);
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la modification ' + e.error.message
      );
    }
  }

  async takeSubscription(subscription: Subscription): Promise<void> {}
}
