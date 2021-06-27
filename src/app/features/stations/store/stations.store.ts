import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Station, StationMonitoring} from '../../../shared/models';
import {Injectable} from '@angular/core';
import {OsmSearchResponse} from "../../../shared/models/osmSearchResponse";

export interface StationsState extends EntityState<Station, number> {
  count: number;
  viewStation: Station;
  viewStationToken: string;
  stationMonitoring: StationMonitoring[],
  addressAutocomplete: OsmSearchResponse[];
}

export function createInitialState(): StationsState {
  return {
    count: 0,
    viewStation: undefined,
    viewStationToken: '',
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
