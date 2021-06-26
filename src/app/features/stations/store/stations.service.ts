import {Injectable} from '@angular/core';
import {StationsStore} from './stations.store';
import {HttpClientWrapper} from '../../../core/utils/httpClientWrapper';
import {Snackbar} from '../../../shared/snackbar/snakbar';
import {Station, StationMonitoring} from '../../../shared/models';
import {API_RESSOURCE_URI} from '../../../shared/api-ressource-uri/api-ressource-uri';
import {HttpTools} from "../../../shared/http-tools/http-tools";
import {OsmSearchResponse} from "../../../shared/models/osmSearchResponse";

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

  async getStationMonitoring(stationId: number, start: Date, end: Date): Promise<void> {
    try {
      const response = await this.http.get<StationMonitoring[]>(
        API_RESSOURCE_URI.STATION_MONITORING + stationId + '/period/?dateStart=' + start.toISOString() + '&dateEnd=' + end.toISOString()
      );
      this.stationsStore.update({stationMonitoring: response});
    } catch (e) {
      this.stationsStore.update({stationMonitoring: []});
      this.snackBar.warnning(
        'Erreur lors de la récupération des métriques d\'une station : ' + e.error.error
      );
    } finally {
      this.stationsStore.setLoading(false);
    }
  }

  async searchAddress(address: string): Promise<void> {
    this.stationsStore.update({addressAutocomplete: []})
    const response = await this.http.get<OsmSearchResponse[]>(API_RESSOURCE_URI.OSM_SEARCH_ADDRESS +
      HttpTools.ObjectToHttpParams({
        q: address,
        format: 'json',
        countrycodes: 'fr',
        addressdetails: 1
      }));
    this.stationsStore.update({addressAutocomplete: response});
  }
}
