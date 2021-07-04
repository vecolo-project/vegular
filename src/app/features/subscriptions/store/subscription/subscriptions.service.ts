import {Injectable} from '@angular/core';
import {HttpClientWrapper} from 'src/app/core/utils/httpClientWrapper';
import {Snackbar} from 'src/app/shared/snackbar/snakbar';
import {Subscription} from "../../../../shared/models";
import {SubscriptionsStore} from "./subscriptions.store";
import {SubscriptionsQuery} from "./subscriptions.query";

@Injectable({providedIn: 'root'})
export class SubscriptionsService {
  constructor(
    private subscriptionsStore: SubscriptionsStore,
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
    private subscriptionsQuery: SubscriptionsQuery
  ) {
  }

  async getSubscriptions(limit: number, offset: number): Promise<never> {
    throw new Error('Method not implemented.');
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
