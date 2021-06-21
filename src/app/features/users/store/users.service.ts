import { Injectable } from '@angular/core';
import { UsersStore } from './users.store';
import { HttpClientWrapper } from '../../../core/utils/httpClientWrapper';
import { Snackbar } from '../../../shared/snackbar/snakbar';
import { User } from '../../../shared/models/user.model';
import { API_RESSOURCE_URI } from '../../../shared/api-ressource-uri/api-ressource-uri';
import { UsersQuery } from './users.query';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(
    private usersStore: UsersStore,
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
    private usersQuery: UsersQuery
  ) {}

  async getUsers(limit: number, offset: number): Promise<void> {
    this.usersStore.setLoading(true);
    try {
      const response = await this.http.get<User[]>(
        API_RESSOURCE_URI.GET_USERS + `?limit=${limit}&offset=${offset}`
      );
      this.usersStore.set(response);
      this.usersStore.update({ count: response.length }); //TODO change response and add total
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
      const response = await this.http.get<{ user: User }>(
        API_RESSOURCE_URI.GET_CURRENT_USER
      );
      /* TODO Remove line below when api goes well
      const response = await this.http.get<{ user: User }>(API_RESSOURCE_URI.GET_CURRENT_USER);
      console.log(response); */
      this.usersStore.update({ editUser: response.user });
    } catch (e) {
      this.snackBar.warnning(
        "Erreur lors de la récupération de l'utilisateur : " + e.error.error
      );
    } finally {
      this.usersStore.setLoading(false);
    }
  }

  async deleteUser(userId: number): Promise<void> {
    this.usersStore.setLoading(true);
    try {
      await this.http.delete<User[]>(API_RESSOURCE_URI.DELETE_USER + userId);
      this.usersStore.remove(userId);
    } catch (e) {
      this.snackBar.warnning(
        "Erreur lors de la suppréssion de l'utilisateur : " + e.error.error
      );
    } finally {
      this.usersStore.setLoading(false);
    }
  }

  async putUser(user: User) {
    this.usersStore.setLoading(true);
    try {
      const response = await this.http.put<User>(
        API_RESSOURCE_URI.PUT_USER + user.id,
        user
      );
      this.usersStore.update({ editUser: response });
    } catch (e) {
      this.snackBar.warnning(
        "Erreur lors de la modification de l'utilisateur : " + e.error.error
      );
    }
  }
}
