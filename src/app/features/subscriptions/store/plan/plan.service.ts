import {Injectable} from '@angular/core';
import {HttpClientWrapper} from 'src/app/core/utils/httpClientWrapper';
import {Snackbar} from 'src/app/shared/snackbar/snakbar';
import {PlanQuery} from './plan.query';
import {PlanStore} from './plan.store';
import {Plan} from "../../../../shared/models";

@Injectable({providedIn: 'root'})
export class PlanService {
  constructor(
    private planStore: PlanStore,
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
    private planQuery: PlanQuery
  ) {
  }

  async getPlans(): Promise<never> {
    throw new Error('Method not implemented.');
  }

  async getPlan(id: number): Promise<never> {
    throw new Error('Method not implemented.');
  }

  async postPlan(plan: Plan): Promise<never> {
    throw new Error('Method not implemented.');
  }

  async putPlan(plan: Plan, id: number): Promise<never> {
    throw new Error('Method not implemented.');
  }

  async deletePlan(id: number): Promise<never> {
    throw new Error('Method not implemented.');
  }

}
