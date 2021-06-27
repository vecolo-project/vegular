import { Injectable } from '@angular/core';
import { HttpClientWrapper } from 'src/app/core/utils/httpClientWrapper';
import { BikeModel } from 'src/app/shared/models';
import { Snackbar } from 'src/app/shared/snackbar/snakbar';
import { API_RESSOURCE_URI } from '../../../../shared/api-ressource-uri/api-ressource-uri';
import { BikeModelQuery } from './model.query';
import { BikeModelStore } from './model.store';

@Injectable({ providedIn: 'root' })
export class BikeModelService {
  constructor(
    private bikeModelStore: BikeModelStore,
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
    private bikeModelQuery: BikeModelQuery
  ) {}

  getModels() {
    throw new Error('Method not implemented.');
  }
  getModel(id: number) {
    throw new Error('Method not implemented.');
  }
  postModel(model: BikeModel) {
    throw new Error('Method not implemented.');
  }
  putModel(model: BikeModel, id: number) {
    throw new Error('Method not implemented.');
  }
}
