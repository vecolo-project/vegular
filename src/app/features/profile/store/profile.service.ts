import {Injectable} from '@angular/core';
import {SessionStore} from 'src/app/core/store/session.store';
import {HttpClientWrapper} from 'src/app/core/utils/httpClientWrapper';
import {API_RESSOURCE_URI} from 'src/app/shared/api-ressource-uri/api-ressource-uri';
import {EditedPassword, EditUser, Invoice, Plan, Ride, Subscription, User,} from 'src/app/shared/models';
import {Snackbar} from 'src/app/shared/snackbar/snakbar';
import {ProfileStore} from './profile.store';
import {HttpTools} from '../../../shared/http-tools/http-tools';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
    private sessionStore: SessionStore,
    private profileStore: ProfileStore
  ) {
  }

  async editUser(user: EditUser): Promise<void> {
    try {
      const userRes = await this.http.put<User>(API_RESSOURCE_URI.PUT_ME, user);
      this.sessionStore.setUser(userRes);
      this.snackBar.success('Informations personnelles bien modifié');
    } catch (e) {
      this.snackBar.warnning('Erreur lors de la modification ' + e.error.error);
    }
  }

  async editPassword(editedPassword: EditedPassword): Promise<void> {
    try {
      await this.http.patch<User>(
        API_RESSOURCE_URI.CHANGE_PASSWORD,
        editedPassword
      );
      this.snackBar.success('mot de passe modifié avec succès');
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la modification du mot de passe ' + e.error.error
      );
    }
  }

  async getActivePlans(): Promise<void> {
    const result = await this.http.get<{ plans: Plan[]; count: number }>(
      API_RESSOURCE_URI.PLAN_ACTIVE
    );
    this.profileStore.update({activePlans: result.plans});
  }

  async subscribeToAPlan(sub: {
    plan: Plan;
    autoRenew: boolean;
  }): Promise<void> {
    const res = await this.http.post<Subscription>(
      API_RESSOURCE_URI.ADD_SUBSCRIPTION,
      sub
    );
    const currentUser = this.sessionStore._value().user;
    currentUser.subscriptions = [res];
    this.sessionStore.update({user: currentUser});
  }

  async getCurrentUserSubscriptions(limit: number, offset: number): Promise<void> {
    this.profileStore.update({userSubscriptions: []});
    this.profileStore.update({userSubscriptionsCount: 0});
    try {
      const response = await this.http.get<{ subscriptions: Subscription[], count: number }>(
        API_RESSOURCE_URI.CURRENT_USER_SUBSCRIPTIONS +
        '?' + HttpTools.ObjectToHttpParams({limit, offset}));
      this.profileStore.update({userSubscriptions: response.subscriptions});
      this.profileStore.update({userSubscriptionsCount: response.count});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération des abonnements : ' + e.error.error
      );
    }
  }

  async getCurrentUserInvoices(limit: number, offset: number): Promise<void> {
    this.profileStore.update({userInvoices: []});
    this.profileStore.update({userInvoicesCount: 0});
    try {
      const response = await this.http.get<{ invoices: Invoice[], count: number }>(
        API_RESSOURCE_URI.CURRENT_USER_INVOICE + '?' + HttpTools.ObjectToHttpParams({limit, offset})
      );
      this.profileStore.update({userInvoices: response.invoices});
      this.profileStore.update({userInvoicesCount: response.count});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération des factures : ' + e.error.error
      );
    }
  }

  async getCurrentUserRides(limit: number, offset: number): Promise<void> {
    this.profileStore.update({userRides: []});
    this.profileStore.update({userRideCount: 0});
    try {
      const response = await this.http.get<{ rides: Ride[], count: number }>(
        API_RESSOURCE_URI.CURRENT_USER_RIDES + '?' + HttpTools.ObjectToHttpParams({limit, offset})
      );
      this.profileStore.update({userRides: response.rides});
      this.profileStore.update({userRideCount: response.count});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération des trajets : ' + e.error.error
      );
    }
  }
}
