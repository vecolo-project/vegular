import {Injectable} from '@angular/core';
import {HttpClientWrapper} from 'src/app/core/utils/httpClientWrapper';
import {Bike} from 'src/app/shared/models';
import {Snackbar} from 'src/app/shared/snackbar/snakbar';
import {BikeQuery} from './bike.query';
import {BikeStore} from './bike.store';
import {API_RESSOURCE_URI} from "../../../../shared/api-ressource-uri/api-ressource-uri";
import {HttpTools} from "../../../../shared/http-tools/http-tools";

@Injectable({providedIn: 'root'})
export class BikeService {
  constructor(
    private bikeStore: BikeStore,
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
    private bikeQuery: BikeQuery
  ) {
  }

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

  async getBikeFromStation(stationId: number, limit: number, offset: number): Promise<void> {
    this.bikeStore.setLoading(true);
    this.bikeStore.set([])
    try {
      const response = await this.http.get<{ bikes: Bike[], count: number }>(
        API_RESSOURCE_URI.BIKE_STATION + stationId + '?' +
        HttpTools.ObjectToHttpParams({limit, offset})
      )
      this.bikeStore.set(response.bikes);
      this.bikeStore.update({count: response.count})
    } catch (e) {
      this.snackBar.warnning('Erreur lors de la récupération des vélos de la station : ' + e.error.error);
    } finally {
      this.bikeStore.setLoading(false)
    }
  }
}
