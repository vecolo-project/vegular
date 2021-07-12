import {Injectable} from '@angular/core';
import {UsersStore} from './users.store';
import {HttpClientWrapper} from '../../../core/utils/httpClientWrapper';
import {Snackbar} from '../../../shared/snackbar/snakbar';
import {Invoice, PutUser, RegisterUser, Ride, Subscription, User} from '../../../shared/models';
import {API_RESSOURCE_URI} from '../../../shared/api-ressource-uri/api-ressource-uri';
import {UsersQuery} from './users.query';
import {HttpTools} from '../../../shared/http-tools/http-tools';

@Injectable({providedIn: 'root'})
export class UsersService {
  constructor(
    private usersStore: UsersStore,
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
    private usersQuery: UsersQuery
  ) {
  }

  async getUsers(limit: number, offset: number, searchQuery: string): Promise<void> {
    this.usersStore.setLoading(true);
    try {
      const response = await this.http.get<{ users: User[]; count: number }>(
        API_RESSOURCE_URI.GET_USERS + '?' + HttpTools.ObjectToHttpParams({limit, offset, searchQuery})
      );
      this.usersStore.set(response.users);
      this.usersStore.update({count: response.count});
    } catch (e) {
      this.usersStore.set([]);
      this.snackBar.warnning(
        'Erreur lors de la récupération des utilisateurs : ' + e.error.error
      );
    } finally {
      this.usersStore.setLoading(false);
    }
  }

  async retrieveEditUser(id: number): Promise<void> {
    this.usersStore.setLoading(true);
    try {
      const response = await this.http.get<User>(
        API_RESSOURCE_URI.GET_USERS + id
      );
      this.usersStore.update({editUser: response});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération de l\'utilisateur : ' + e.error.error
      );
    } finally {
      this.usersStore.setLoading(false);
    }
  }

  async deleteUser(userId: number): Promise<void> {
    this.usersStore.setLoading(true);
    try {
      await this.http.delete<void>(API_RESSOURCE_URI.DELETE_USER + userId);
      this.usersStore.remove(userId);
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la suppréssion de l\'utilisateur : ' + e.error.error
      );
    } finally {
      this.usersStore.setLoading(false);
    }
  }

  async putUser(user: PutUser, id: number): Promise<void> {
    this.usersStore.setLoading(true);
    try {
      const response = await this.http.put<User>(
        API_RESSOURCE_URI.PUT_USER + id,
        user
      );
      this.usersStore.update({editUser: response});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la modification de l\'utilisateur : ' + e.error.error
      );
    } finally {
      this.usersStore.setLoading(false);
    }
  }

  async postUser(user: RegisterUser): Promise<void> {
    this.usersStore.setLoading(true);
    try {
      const response = await this.http.post<User>(
        API_RESSOURCE_URI.POST_USER,
        user
      );
      this.usersStore.update({editUser: response});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de l\'ajout de l\'utilisateur : ' + e.error.error
      );
    } finally {
      this.usersStore.setLoading(false);
    }
  }

  async getUserSubscriptions(userId: number, limit: number, offset: number): Promise<void> {
    this.usersStore.setLoading(true);
    this.usersStore.update({viewUserSubscriptions: []});
    this.usersStore.update({viewUserSubscriptionsCount: 0});
    try {
      const response = await this.http.get<{ subscriptions: Subscription[], count: number }>(
        API_RESSOURCE_URI.USER_SUBSCRIPTION + userId + '?' + HttpTools.ObjectToHttpParams({limit, offset})
      );
      this.usersStore.update({viewUserSubscriptions: response.subscriptions});
      this.usersStore.update({viewUserSubscriptionsCount: response.count});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération des abonnements de l\'utilisateur : ' + e.error.error
      );
    } finally {
      this.usersStore.setLoading(false);
    }
  }
  async getUserInvoices(userId: number, limit: number, offset: number): Promise<void> {
    this.usersStore.setLoading(true);
    this.usersStore.update({viewUserInvoices: []});
    this.usersStore.update({viewUserInvoicesCount: 0});
    try {
      const response = await this.http.get<{ invoices: Invoice[], count: number }>(
        API_RESSOURCE_URI.USER_INVOICE + userId + '?' + HttpTools.ObjectToHttpParams({limit, offset})
      );
      this.usersStore.update({viewUserInvoices: response.invoices});
      this.usersStore.update({viewUserInvoicesCount: response.count});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération des factures de l\'utilisateur : ' + e.error.error
      );
    } finally {
      this.usersStore.setLoading(false);
    }
  }
  async getUserRides(userId: number, limit: number, offset: number): Promise<void> {
    this.usersStore.setLoading(true);
    this.usersStore.update({viewUserRides: []});
    this.usersStore.update({viewUserRidesCount: 0});
    try {
      const response = await this.http.get<{ rides: Ride[], count: number }>(
        API_RESSOURCE_URI.USER_SUBSCRIPTION + userId + '?' + HttpTools.ObjectToHttpParams({limit, offset})
      );
      this.usersStore.update({viewUserRides: response.rides});
      this.usersStore.update({viewUserRidesCount: response.count});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération des trajets de l\'utilisateur : ' + e.error.error
      );
    } finally {
      this.usersStore.setLoading(false);
    }
  }
}
