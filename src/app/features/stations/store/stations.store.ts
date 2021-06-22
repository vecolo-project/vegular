import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Station} from '../../../shared/models';
import {Injectable} from '@angular/core';

export interface StationsState extends EntityState<Station, number> {
  count: number;
  editStation: Station;
}

export function createInitialState(): StationsState {
  return {
    count: 0,
    editStation: undefined
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'stations'})
export class StationsStore extends EntityStore<StationsState, Station> {
  constructor() {
    super(createInitialState());
  }
}
