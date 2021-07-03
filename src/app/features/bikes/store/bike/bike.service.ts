import { Injectable } from '@angular/core';
import { HttpClientWrapper } from 'src/app/core/utils/httpClientWrapper';
import { Bike } from 'src/app/shared/models';
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

  async getBikes(): Promise<never> {
    throw new Error('Method not implemented.');
  }

  async getBike(id: number): Promise<never> {
    throw new Error('Method not implemented.');
  }

  async postBikes(): Promise<never> {
    throw new Error('Method not implemented.');
  }

  async putBike(bike: Bike, id: number): Promise<never> {
    throw new Error('Method not implemented.');
  }

  async deleteBike(id: number): Promise<never> {
    throw new Error('Method not implemented.');
  }
}
