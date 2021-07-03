import {Injectable} from '@angular/core';
import {StationsState, StationsStore} from './stations.store';
import {QueryEntity} from '@datorama/akita';
import {Observable} from 'rxjs';
import {OsmSearchResponse, Ride, Station, StationMonitoring} from '../../../shared/models';

@Injectable({providedIn: 'root'})
export class StationsQuery extends QueryEntity<StationsState, Station> {
  selectStationsArray$: Observable<Station[]> = this.selectAll();
  selectViewStation$: Observable<Station> = this.select('viewStation');
  selectViewStationToken$: Observable<string> = this.select('viewStationToken');
  selectViewStationMonitoring$: Observable<StationMonitoring[]> = this.select('stationMonitoring');
  selectViewStationRides$: Observable<Ride[]> = this.select('stationRides');
  selectViewStationRidesCount$: Observable<number> = this.select('stationRidesCount');
  selectAdressSearchResult$: Observable<OsmSearchResponse[]> = this.select('addressAutocomplete');
  selectIds$: Observable<number[]> = this.select('ids');
  selectCount$: Observable<number> = this.select('count');
  isLoading$: Observable<boolean> = this.select('loading');

  constructor(protected store: StationsStore) {
    super(store);
  }

  setViewStation(id): void {
    this.store.update({viewStation: this.getEntity(id)});
    this.store.update({viewStationToken: ''});
  }

}
