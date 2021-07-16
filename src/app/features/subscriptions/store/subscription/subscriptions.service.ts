import {Injectable} from '@angular/core';
import {HttpClientWrapper} from 'src/app/core/utils/httpClientWrapper';
import {Snackbar} from 'src/app/shared/snackbar/snakbar';
import {Station, Subscription} from '../../../../shared/models';
import {SubscriptionsStore} from './subscriptions.store';
import {SubscriptionsQuery} from './subscriptions.query';
import {API_RESSOURCE_URI} from '../../../../shared/api-ressource-uri/api-ressource-uri';
import {RouterNavigation} from '../../../../core/router/router.navigation';

@Injectable({providedIn: 'root'})
export class SubscriptionsService {
  constructor(
    private subscriptionsStore: SubscriptionsStore,
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
    private subscriptionsQuery: SubscriptionsQuery,
    private routerNavigation: RouterNavigation
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

  async getSubscription(id: number): Promise<void> {
    this.subscriptionsStore.setLoading(true);
    try {
      const response = await this.http.get<Subscription>(
        API_RESSOURCE_URI.BASE_SUBSCRIPTION + id
      );
      this.subscriptionsStore.update({viewSubscription: response});
    } catch (e) {
      this.subscriptionsStore.update({viewSubscription: undefined});
      this.snackBar.warnning(
        'Erreur lors de la récupération d\'un abonnement : ' + e.error.error
      );
    } finally {
      this.subscriptionsStore.setLoading(false);
    }
  }

  async postSubscription(subscription: Subscription): Promise<void> {
    this.subscriptionsStore.setLoading(true);
    try {
      const response = await this.http.post<Subscription>(
        API_RESSOURCE_URI.BASE_SUBSCRIPTION,
        subscription
      );
      response.invoices = [];
      this.subscriptionsStore.add(response);
      this.routerNavigation.gotoSubscriptionList();
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la création d\'un abonnement : ' + e.error.error
      );
    } finally {
      this.subscriptionsStore.setLoading(false);
    }
  }

  async putSubscription(subscription: Subscription): Promise<void> {
    this.subscriptionsStore.setLoading(true);
    try {
      await this.http.put<Subscription>(
        API_RESSOURCE_URI.BASE_SUBSCRIPTION + subscription.id,
        subscription
      );
      this.subscriptionsStore.update(subscription.id, subscription);
      this.subscriptionsStore.update({viewSubscription: subscription});
      this.snackBar.success('Abonnement mis à jour');
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la mise à jour d\'un abonnement : ' + e.error.error
      );
    } finally {
      this.subscriptionsStore.setLoading(false);
    }
  }

  async deleteSubscription(id: number): Promise<void> {
    this.subscriptionsStore.setLoading(true);
    try {
      await this.http.delete<void>(
        API_RESSOURCE_URI.BASE_SUBSCRIPTION + id
      );
      this.subscriptionsStore.remove(id);
      this.snackBar.success(
        'L\'abonnement a été supprimé'
      );
    } catch (e) {
      this.subscriptionsStore.update({viewSubscription: undefined});
      this.snackBar.warnning(
        'Erreur lors de la suppression d\'un abonnement : ' + e.error.error
      );
    } finally {
      this.routerNavigation.gotoSubscriptionList();
      this.subscriptionsStore.setLoading(false);
    }
  }

}
