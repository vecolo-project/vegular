import { Injectable } from '@angular/core';
import { SessionStore } from 'src/app/core/store/session.store';
import { HttpClientWrapper } from 'src/app/core/utils/httpClientWrapper';
import { API_RESSOURCE_URI } from 'src/app/shared/api-ressource-uri/api-ressource-uri';
import {
  editedPassword,
  EditUser,
  Subscription,
  User,
} from 'src/app/shared/models';
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

  async editUser(user: EditUser): Promise<void> {
    try {
      const userRes = await this.http.put<User>(API_RESSOURCE_URI.PUT_ME, user);
      this.sessionStore.setUser(userRes);
      this.snackBar.success('Information personnel bien modifier');
    } catch (e) {
      this.snackBar.warnning('Erreur lors de la modification ' + e.error.error);
    }
  }

  async editPassword(editedPassword: editedPassword): Promise<void> {
    try {
      await this.http.patch<User>(API_RESSOURCE_URI.PUT_ME, editedPassword);
      this.snackBar.success('mot de passe modifier avec succès');
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la modification du mot de passe ' + e.error.error
      );
    }
  }

  async takeSubscription(subscription: Subscription): Promise<void> {}
}
