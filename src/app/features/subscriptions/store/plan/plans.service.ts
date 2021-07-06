import {Injectable} from '@angular/core';
import {HttpClientWrapper} from 'src/app/core/utils/httpClientWrapper';
import {Snackbar} from 'src/app/shared/snackbar/snakbar';
import {PlansQuery} from './plans.query';
import {PlansStore} from './plans.store';
import {Plan, Station} from "../../../../shared/models";
import {API_RESSOURCE_URI} from "../../../../shared/api-ressource-uri/api-ressource-uri";
import {RouterNavigation} from "../../../../core/router/router.navigation";

@Injectable({providedIn: 'root'})
export class PlansService {
  constructor(
    private planStore: PlansStore,
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
    private planQuery: PlansQuery,
    private routerNavigation: RouterNavigation
  ) {
  }

  async getPlans(limit: number, offset: number): Promise<void> {
    this.planStore.setLoading(true);
    this.planStore.set([]);
    try {
      const response = await this.http.get<{ plans: Plan[], count: number }>(
        API_RESSOURCE_URI.BASE_PLAN + `?limit=${limit}&offset=${offset}`
      );
      this.planStore.set(response.plans);
      this.planStore.update({count: response.count});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération des forfait : ' + e.error.error
      );
    } finally {
      this.planStore.setLoading(false);
    }
  }

  async getPlan(id: number): Promise<void> {
    this.planStore.setLoading(true);
    try {
      const response = await this.http.get<Plan>(
        API_RESSOURCE_URI.BASE_PLAN + id
      );
      this.planStore.update({viewPlan: response});
    } catch (e) {
      this.planStore.update({viewPlan: undefined});
      this.snackBar.warnning(
        'Erreur lors de la récupération d\'un forfait : ' + e.error.error
      );
    } finally {
      this.planStore.setLoading(false);
    }
  }

  async postPlan(plan: Plan): Promise<void> {
    this.planStore.setLoading(true);
    try {
      const response = await this.http.post<Plan>(
        API_RESSOURCE_URI.BASE_PLAN,
        plan
      );
      response.subscriptions = [];
      this.planStore.add(response);
      this.routerNavigation.gotoSubscriptionList();
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la création d\'un forfait : ' + e.error.error
      );
    } finally {
      this.planStore.setLoading(false);
    }
  }

  async putPlan(plan: Plan): Promise<void> {
    this.planStore.setLoading(true);
    try {
      await this.http.put<Plan>(
        API_RESSOURCE_URI.BASE_PLAN + plan.id,
        plan
      );
      this.planStore.update(plan.id, plan);
      this.planStore.update({viewPlan: plan});
      this.snackBar.success("Forfait mis à jour");
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la mise à jour d\'un forfait : ' + e.error.error
      );
    } finally {
      this.planStore.setLoading(false);
    }
  }

  async deletePlan(id: number): Promise<void> {
    this.planStore.setLoading(true);
    try {
      await this.http.delete<Station>(
        API_RESSOURCE_URI.BASE_PLAN + id
      );
      this.planStore.remove(id);
      this.snackBar.success(
        'Le forfait a été supprimé'
      );
    } catch (e) {
      this.planStore.update({viewStation: undefined});
      this.snackBar.warnning(
        'Erreur lors de la suppression d\'un forfait : ' + e.error.error
      );
    } finally {
      this.routerNavigation.gotoSubscriptionList();
      this.planStore.setLoading(false);
    }
  }

}
