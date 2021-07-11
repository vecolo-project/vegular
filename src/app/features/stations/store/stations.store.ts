import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {OsmSearchResponse, Ride, Station, StationMonitoring} from '../../../shared/models';
import {Injectable} from '@angular/core';

export interface StationsState extends EntityState<Station, number> {
  count: number;
  viewStation: Station;
  viewStationToken: string;
  stationRides: Ride[];
  stationRidesCount: number;
  stationMonitoring: StationMonitoring[];
  addressAutocomplete: OsmSearchResponse[];
}

export function createInitialState(): StationsState {
  return {
    count: 0,
    viewStation: undefined,
    viewStationToken: '',
    stationRides: [],
    stationRidesCount: 0,
    stationMonitoring: [],
    addressAutocomplete: []
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'stations'})
export class StationsStore extends EntityStore<StationsState, Station> {
  constructor() {
    super(createInitialState());
  }
}
