import {Injectable} from '@angular/core';
import {StationsStore} from './stations.store';
import {HttpClientWrapper} from '../../../core/utils/httpClientWrapper';
import {Snackbar} from '../../../shared/snackbar/snakbar';
import {Station} from '../../../shared/models';
import {API_RESSOURCE_URI} from '../../../shared/api-ressource-uri/api-ressource-uri';

@Injectable({providedIn: 'root'})
export class StationsService {
  constructor(
    private stationsStore: StationsStore,
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
  ) {
  }

  async getStations(limit: number, offset: number): Promise<void> {
    this.stationsStore.setLoading(true);
    try {
      const response = await this.http.get<Station[]>(
        API_RESSOURCE_URI.GET_STATIONS + `?limit=${limit}&offset=${offset}`
      );
      this.stationsStore.set(response);
      this.stationsStore.update({count: response.length});
    } catch (e) {
      this.stationsStore.set([]);
      this.snackBar.warnning(
        'Erreur lors de la récupération des stations : ' + e.error.error
      );
    } finally {
      this.stationsStore.setLoading(false);
    }
  }

  async getStation(stationId: number): Promise<void> {
    try {
      const response = await this.http.get<Station>(
        API_RESSOURCE_URI.GET_STATIONS + '/' + stationId
      );
      this.stationsStore.update({viewStation: response});
    } catch (e) {
      this.stationsStore.update({viewStation: undefined});
      this.snackBar.warnning(
        'Erreur lors de la récupération d\'une station : ' + e.error.error
      );
    } finally {
      this.stationsStore.setLoading(false);
    }

  }
}