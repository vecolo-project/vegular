import {Injectable} from '@angular/core';
import {StationsStore} from './stations.store';
import {HttpClientWrapper} from '../../../core/utils/httpClientWrapper';
import {Snackbar} from '../../../shared/snackbar/snakbar';
import {OsmSearchResponse, Ride, Station, StationMonitoring} from '../../../shared/models';
import {API_RESSOURCE_URI} from '../../../shared/api-ressource-uri/api-ressource-uri';
import {HttpTools} from '../../../shared/http-tools/http-tools';
import {RouterNavigation} from '../../../core/router/router.navigation';

@Injectable({providedIn: 'root'})
export class StationsService {
  constructor(
    private stationsStore: StationsStore,
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
    private routerNavigation: RouterNavigation
  ) {
  }

  async getStations(limit: number, offset: number, searchQuery?: string): Promise<void> {
    this.stationsStore.setLoading(true);
    this.stationsStore.set([]);
    try {
      const response = await this.http.get<{ stations: Station[], count: number }>(
        API_RESSOURCE_URI.BASE_STATIONS + '?' + HttpTools.ObjectToHttpParams({limit, offset, searchQuery}),
      );
      this.stationsStore.set(response.stations);
      this.stationsStore.update({count: response.count});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération des stations : ' + e.error.error
      );
    } finally {
      this.stationsStore.setLoading(false);
    }
  }

  async getRides(stationId: number, limit: number, offset: number): Promise<void> {
    this.stationsStore.update({stationRides: []});
    try {
      const response = await this.http.get<{ rides: Ride[], count: number }>(
        API_RESSOURCE_URI.RIDE_STATION + stationId + `?limit=${limit}&offset=${offset}`
      );
      this.stationsStore.update({stationRides: response.rides});
      this.stationsStore.update({stationRidesCount: response.count});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération des courses d\'une station : ' + e.error.error
      );
    }
  }

  async getStation(stationId: number): Promise<void> {
    this.stationsStore.setLoading(true);
    if (this.stationsStore._value().viewStation?.id !== stationId) {
      this.stationsStore.update({viewStationToken: ''});
    }
    try {
      const response = await this.http.get<Station>(
        API_RESSOURCE_URI.BASE_STATIONS + stationId
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

  async deleteStation(stationId: number): Promise<void> {
    this.stationsStore.setLoading(true);
    try {
      await this.http.delete<Station>(
        API_RESSOURCE_URI.BASE_STATIONS + stationId
      );
      this.stationsStore.remove(stationId);
      this.snackBar.success(
        'La station a été supprimé'
      );
    } catch (e) {
      this.stationsStore.update({viewStation: undefined});
      this.snackBar.warnning(
        'Erreur lors de la suppression d\'une station : ' + e.error.error
      );
    } finally {
      this.routerNavigation.gotoStationList();
      this.stationsStore.setLoading(false);
    }
  }

  async getStationMonitoring(stationId: number, start: Date, end: Date): Promise<void> {
    this.stationsStore.setLoading(true);
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
    this.stationsStore.setLoading(true);
    this.stationsStore.update({addressAutocomplete: []});
    const response = await this.http.get<OsmSearchResponse[]>(API_RESSOURCE_URI.OSM_SEARCH_ADDRESS +
      HttpTools.ObjectToHttpParams({
        q: address,
        format: 'json',
        countrycodes: 'fr',
        addressdetails: 1
      }));
    this.stationsStore.update({addressAutocomplete: response});
  }

  async createStation(station: Station): Promise<void> {
    this.stationsStore.setLoading(true);
    try {
      const response = await this.http.post<Station>(
        API_RESSOURCE_URI.BASE_STATIONS,
        station
      );
      response.stationMonitoring = [];
      this.stationsStore.add(response);
      this.routerNavigation.gotoStationList();
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la création d\'une station : ' + e.error.error
      );
    } finally {
      this.stationsStore.setLoading(false);
    }
  }

  async updateStation(station: Station): Promise<void> {
    this.stationsStore.setLoading(true);
    try {
      const response = await this.http.put<Station>(
        API_RESSOURCE_URI.BASE_STATIONS + station.id,
        station
      );
      response.stationMonitoring = [];
      this.stationsStore.update(station.id, station);
      this.stationsStore.update({viewStation: station});
      this.snackBar.success('Station mis à jour');
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la mise à jour d\'une station : ' + e.error.error
      );
    } finally {
      this.stationsStore.setLoading(false);
    }
  }

  async getStationToken(stationId: number): Promise<void> {
    this.stationsStore.setLoading(true);
    try {
      const response = await this.http.get<string>(
        API_RESSOURCE_URI.BASE_STATIONS + '/generate-token/' + stationId);
      this.stationsStore.update({viewStationToken: response});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération du token d\'une station : ' + e.error.error
      );
    } finally {
      this.stationsStore.setLoading(false);
    }
  }
}
