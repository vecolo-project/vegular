import { Injectable } from '@angular/core';
import { HttpClientWrapper } from 'src/app/core/utils/httpClientWrapper';
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
}
