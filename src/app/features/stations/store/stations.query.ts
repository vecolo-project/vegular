import {Injectable} from '@angular/core';
import {StationsState, StationsStore} from './stations.store';
import {QueryEntity} from '@datorama/akita';
import {Observable} from 'rxjs';
import {Station, StationMonitoring} from '../../../shared/models';
import {OsmSearchResponse} from "../../../shared/models/osmSearchResponse.model";

@Injectable({providedIn: 'root'})
export class StationsQuery extends QueryEntity<StationsState, Station> {
  selectStationsArray$: Observable<Station[]> = this.selectAll();
  selectEditStation$: Observable<Station> = this.select('editStation');
  selectViewStation$: Observable<Station> = this.select('viewStation');
  selectViewStationToken$: Observable<string> = this.select('viewStationToken');
  selectViewStationMonitoring$: Observable<StationMonitoring[]> = this.select('stationMonitoring');
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
