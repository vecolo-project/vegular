import { Injectable } from '@angular/core';
import { HttpClientWrapper } from 'src/app/core/utils/httpClientWrapper';
import { Snackbar } from 'src/app/shared/snackbar/snakbar';
import { API_RESSOURCE_URI } from '../../../../shared/api-ressource-uri/api-ressource-uri';
import { BikeQuery } from './bike.query';
import { BikeStore } from './bike.store';

@Injectable({ providedIn: 'root' })
export class BikeService {
  constructor(
    private bikeStore: BikeStore,
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
    private bikeQuery: BikeQuery
  ) {}
}
