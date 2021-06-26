import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Station, StationMonitoring} from '../../../shared/models';
import {Injectable} from '@angular/core';

export interface StationsState extends EntityState<Station, number> {
  count: number;
  editStation: Station;
  viewStation: Station;
  stationMonitoring:StationMonitoring[]
}

export function createInitialState(): StationsState {
  return {
    count: 0,
    editStation: undefined,
    viewStation: undefined,
    stationMonitoring:[]
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'stations'})
export class StationsStore extends EntityStore<StationsState, Station> {
  constructor() {
    super(createInitialState());
  }
}
