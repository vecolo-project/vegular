import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';
import {ProfileState, ProfileStore} from './profile.store';

@Injectable({
  providedIn: 'root',
})
export default class ProfileQuery extends Query<ProfileState> {

  selectActivePlans$ = this.select('activePlans');
  selectUserRides$ = this.select('userRides');
  selectUserSubscriptions$ = this.select('userSubscriptions');
  selectUserInvoices$ = this.select('userInvoices');
  selectUserRideCount$ = this.select('userRideCount');
  selectUserSubscriptionsCount$ = this.select('userSubscriptionsCount');
  selectUserInvoicesCount$ = this.select('userInvoicesCount');

  constructor(protected store: ProfileStore) {
    super(store);
  }
}
