import {Injectable} from '@angular/core';
import {StatisticsStore} from './statistics.store';
import {HttpClientWrapper} from '../../../core/utils/httpClientWrapper';
import {Snackbar} from '../../../shared/snackbar/snakbar';
import {
  BikesStatistics,
  IncomeStatistics,
  RidesStatistics,
  StationsStatistics,
  SubscriptionStatistics,
  UserSubscriptionsStatistics
} from '../../../shared/models';
import {API_RESSOURCE_URI} from '../../../shared/api-ressource-uri/api-ressource-uri';
import {HttpTools} from '../../../shared/http-tools/http-tools';

@Injectable({providedIn: 'root'})
export class StatisticsService {
  constructor(
    private statisticsStore: StatisticsStore,
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
  ) {
  }

  async getSubscriptionsStatistics(): Promise<void> {
    this.statisticsStore.update({subscriptions: []});
    try {
      const response = await this.http.get<SubscriptionStatistics[]>(
        API_RESSOURCE_URI.STATISTICS_SUBSCRIPTIONS
      );
      this.statisticsStore.update({subscriptions: response});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération des statistiques sur les abonnements : ' + e.error.error
      );
    }
  }

  async getMonthIncomesStatistics(month: number, year: number): Promise<void> {
    this.statisticsStore.update({incomes: undefined});
    try {
      const response = await this.http.get<IncomeStatistics>(
        API_RESSOURCE_URI.STATISTICS_INCOMES + HttpTools.ObjectToHttpParams({month, year})
      );
      this.statisticsStore.update({incomes: response});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération des statistiques sur les revenus : ' + e.error.error
      );
    }
  }

  async getMonthUsersSubscriptionsStatistics(month: number, year: number): Promise<void> {
    this.statisticsStore.update({usersSubscriptions: undefined});
    try {
      const response = await this.http.get<UserSubscriptionsStatistics>(
        API_RESSOURCE_URI.STATISTICS_USER_SUBSCRIPTIONS + HttpTools.ObjectToHttpParams({month, year})
      );
      this.statisticsStore.update({usersSubscriptions: response});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération des statistiques sur les inscriptions : ' + e.error.error
      );
    }
  }

  async getMonthRidesStatistics(month: number, year: number): Promise<void> {
    this.statisticsStore.update({rides: []});
    try {
      const response = await this.http.get<RidesStatistics[]>(
        API_RESSOURCE_URI.STATISTICS_RIDES + HttpTools.ObjectToHttpParams({month, year})
      );
      this.statisticsStore.update({rides: response});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération des statistiques sur les trajets : ' + e.error.error
      );
    }
  }

  async getStationsStatistics(): Promise<void> {
    this.statisticsStore.update({stations: undefined});
    try {
      const response = await this.http.get<StationsStatistics>(
        API_RESSOURCE_URI.STATISTICS_STATIONS
      );
      this.statisticsStore.update({stations: response});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération des statistiques sur les bornes : ' + e.error.error
      );
    }
  }

  async getBikesStatistics(): Promise<void> {
    this.statisticsStore.update({bikes: []});
    try {
      const response = await this.http.get<BikesStatistics[]>(
        API_RESSOURCE_URI.STATISTICS_BIKES
      );
      this.statisticsStore.update({bikes: response});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération des statistiques sur les vélos : ' + e.error.error
      );
    }
  }

}
