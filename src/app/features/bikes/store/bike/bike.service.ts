import {Injectable} from '@angular/core';
import {HttpClientWrapper} from 'src/app/core/utils/httpClientWrapper';
import {Bike, BikeProps, Ride} from 'src/app/shared/models';
import {Snackbar} from 'src/app/shared/snackbar/snakbar';
import {BikeQuery} from './bike.query';
import {BikeStore} from './bike.store';
import {API_RESSOURCE_URI} from '../../../../shared/api-ressource-uri/api-ressource-uri';
import {HttpTools} from '../../../../shared/http-tools/http-tools';

@Injectable({providedIn: 'root'})
export class BikeService {
  constructor(
    private bikeStore: BikeStore,
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
    private bikeQuery: BikeQuery
  ) {
  }

  async getBikes(limit: number, offset: number, searchQuery?: string): Promise<void> {
    this.bikeStore.setLoading(true);
    try {
      const response = await this.http.get<{ bikes: Bike[], count: number }>(
        API_RESSOURCE_URI.BASE_BIKE + '?' + HttpTools.ObjectToHttpParams({limit, offset, searchQuery})
        )
      ;
      this.bikeStore.set(response.bikes);
      this.bikeStore.update({count: response.count});
    } catch (e) {
      this.bikeStore.set([]);
      this.snackBar.warnning(
        'Erreur lors de la récupération des vélos : ' + e.error.error
      );
    } finally {
      this.bikeStore.setLoading(false);
    }
  }

  async getBike(id: number): Promise<void> {
    this.bikeStore.setLoading(true);
    try {
      const response = await this.http.get<Bike>(
        API_RESSOURCE_URI.BIKE_WITH_STATION_AND_MODEL + id
      );
      this.bikeStore.update({editBike: response});
    } catch (e) {
      this.bikeStore.set({editBike: null});
      this.snackBar.warnning(
        'Erreur lors de la récupération du vélo : ' + e.error.error
      );
    } finally {
      this.bikeStore.setLoading(false);
    }
  }

  async postBike(bike: BikeProps): Promise<void> {
    this.bikeStore.setLoading(true);
    try {
      const response = await this.http.post<Bike>(
        API_RESSOURCE_URI.BASE_BIKE,
        bike
      );
      this.bikeStore.add(response);
    } catch (err) {
      this.snackBar.warnning(
        'Erreur lors de l\'ajout d\'un vélo : ' + err.error.error
      );
    } finally {
      this.bikeStore.setLoading(false);
    }
  }

  async putBike(bike: BikeProps, id: number): Promise<void> {
    this.bikeStore.setLoading(true);
    try {
      const response = await this.http.put<Bike>(
        API_RESSOURCE_URI.BASE_BIKE + id,
        bike
      );
      this.bikeStore.update(response.id, response);
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la modification du vélo : ' + e.error.error
      );
    } finally {
      this.bikeStore.setLoading(false);
    }
  }

  async deleteBike(id: number): Promise<void> {
    this.bikeStore.setLoading(true);
    try {
      await this.http.delete(API_RESSOURCE_URI.BASE_BIKE + id);
      this.bikeStore.remove(id);
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la suppression du vélo : ' + e.error.error
      );
    } finally {
      this.bikeStore.setLoading(false);
    }
  }

  async getBikeFromStation(
    stationId: number,
    limit: number,
    offset: number
  ): Promise<void> {
    this.bikeStore.setLoading(true);
    this.bikeStore.set([]);
    try {
      const response = await this.http.get<{ bikes: Bike[]; count: number }>(
        API_RESSOURCE_URI.BIKE_STATION +
        stationId +
        '?' +
        HttpTools.ObjectToHttpParams({limit, offset})
      );
      this.bikeStore.set(response.bikes);
      this.bikeStore.update({count: response.count});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération des vélos de la station : ' +
        e.error.error
      );
    } finally {
      this.bikeStore.setLoading(false);
    }
  }

  async getRides(bikeId: number, limit: number, offset: number): Promise<void> {
    this.bikeStore.update({bikeRides: []});
    try {
      const response = await this.http.get<{ rides: Ride[], count: number }>(
        API_RESSOURCE_URI.RIDE_BIKE + bikeId + `?limit=${limit}&offset=${offset}`
      );
      this.bikeStore.update({bikeRides: response.rides});
      this.bikeStore.update({bikeRidesCount: response.count});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération des courses d\'un vélo : ' + e.error.error
      );
    }
  }

}
