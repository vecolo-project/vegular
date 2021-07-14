import {Injectable} from '@angular/core';
import {RidesStore, RideState} from './rides.store';
import {QueryEntity} from '@datorama/akita';
import {Observable} from 'rxjs';
import {Ride} from '../../../shared/models';

@Injectable({providedIn: 'root'})
export class RidesQuery extends QueryEntity<RideState, Ride> {
  selectRidesArray$: Observable<Ride[]> = this.selectAll();
  selectViewRide: Observable<Ride> = this.select('viewRide');
  selectCount$: Observable<number> = this.select('count');
  isLoading$: Observable<boolean> = this.select('loading');

  constructor(protected store: RidesStore) {
    super(store);
  }

  setViewRide(id): void {
    this.store.update({viewRide: this.getEntity(id)});
  }

}
