import {Injectable} from '@angular/core';
import {StationsState, StationsStore} from './stations.store';
import {QueryEntity} from '@datorama/akita';
import {Observable} from 'rxjs';
import {Station} from '../../../shared/models';

@Injectable({providedIn: 'root'})
export class StationsQuery extends QueryEntity<StationsState, Station> {
  selectStationsArray$: Observable<Station[]> = this.selectAll();
  selectEditStation$: Observable<Station> = this.select('editStation')
  selectViewStation$: Observable<Station> = this.select('viewStation')
  selectIds$: Observable<number[]> = this.select('ids');
  selectCount$: Observable<number> = this.select('count');
  isLoading$: Observable<boolean> = this.select('loading');

  constructor(protected store: StationsStore) {
    super(store);
  }

  setEditStation(id): void {
    this.store.update({editStation: this.getEntity(id)})
  }

}
