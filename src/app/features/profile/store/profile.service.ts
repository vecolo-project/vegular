import { Injectable } from '@angular/core';
import { SessionStore } from 'src/app/core/store/session.store';
import { HttpClientWrapper } from 'src/app/core/utils/httpClientWrapper';
import { API_RESSOURCE_URI } from 'src/app/shared/api-ressource-uri/api-ressource-uri';
import {
  editedPassword,
  EditUser,
  Plan,
  Subscription,
  User,
} from 'src/app/shared/models';
import { Snackbar } from 'src/app/shared/snackbar/snakbar';
import { ProfileStore } from './profile.store';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
    private sessionStore: SessionStore,
    private profileStore: ProfileStore
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
      await this.http.patch<User>(
        API_RESSOURCE_URI.CHANGE_PASSWORD,
        editedPassword
      );
      this.snackBar.success('mot de passe modifier avec succès');
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la modification du mot de passe ' + e.error.error
      );
    }
  }

  async getActivePlans(): Promise<void> {
    const plans = await this.http.get<{ plans: Plan[]; count: number }>(
      API_RESSOURCE_URI.PLAN_ACTIVE
    );
    this.profileStore.set(plans.plans);
  }

  async subscribeToAPlan(sub: {
    plan: Plan;
    autoRenew: boolean;
  }): Promise<void> {
    const res = await this.http.post<Subscription>(
      API_RESSOURCE_URI.ADD_SUBSCRIPTION,
      sub
    );
    this.profileStore.update({ userPlan: res.id });
  }
  async getUserPlan(): Promise<void> {
    const res = await this.http.get<any>(API_RESSOURCE_URI.MY_SUBSCRIPTION);
    console.log(res);
    this.profileStore.update({ userPlan: res.id });
  }
}
