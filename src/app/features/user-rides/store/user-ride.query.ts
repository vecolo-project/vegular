import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';
import {UserRideState, UserRideStore} from './user-ride.store';

@Injectable({
  providedIn: 'root',
})
export default class UserRideQuery extends Query<UserRideState> {

  selectCurrentRide$ = this.select('currentRide');

  constructor(protected store: UserRideStore) {
    super(store);
  }
}
