import {Injectable} from '@angular/core';
import {HttpClientWrapper} from 'src/app/core/utils/httpClientWrapper';
import {Snackbar} from 'src/app/shared/snackbar/snakbar';
import {Plan, Subscription} from "../../../../shared/models";
import {SubscriptionsStore} from "./subscriptions.store";
import {SubscriptionsQuery} from "./subscriptions.query";
import {API_RESSOURCE_URI} from "../../../../shared/api-ressource-uri/api-ressource-uri";

@Injectable({providedIn: 'root'})
export class SubscriptionsService {
  constructor(
    private subscriptionsStore: SubscriptionsStore,
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
    private subscriptionsQuery: SubscriptionsQuery
  ) {
  }

  async getSubscriptions(limit: number, offset: number): Promise<void> {
    this.subscriptionsStore.setLoading(true);
    this.subscriptionsStore.set([]);
    try {
      const response = await this.http.get<{ subscriptions: Subscription[], count: number }>(
        API_RESSOURCE_URI.BASE_SUBSCRIPTION + `?limit=${limit}&offset=${offset}`
      );
      this.subscriptionsStore.set(response.subscriptions);
      this.subscriptionsStore.update({count: response.count});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération des abonnements : ' + e.error.error
      );
    } finally {
      this.subscriptionsStore.setLoading(false);
    }
  }

  async getSubscription(id: number): Promise<never> {
    throw new Error('Method not implemented.');
  }

  async postSubscription(subscription: Subscription): Promise<never> {
    throw new Error('Method not implemented.');
  }

  async putSubscription(subscription: Subscription): Promise<never> {
    throw new Error('Method not implemented.');
  }

  async deleteSubscription(id: number): Promise<never> {
    throw new Error('Method not implemented.');
  }

}
