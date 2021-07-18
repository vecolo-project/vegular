import { Injectable } from '@angular/core';
import { HttpClientWrapper } from 'src/app/core/utils/httpClientWrapper';
import { API_RESSOURCE_URI } from 'src/app/shared/api-ressource-uri/api-ressource-uri';
import { Bike, Ride, Station } from 'src/app/shared/models';
import { Snackbar } from 'src/app/shared/snackbar/snakbar';
import { UserRideStore } from './user-ride.store';
import { RouterNavigation } from '../../../core/router/router.navigation';
import { ProfileStore } from '../../profile/store/profile.store';

@Injectable({
  providedIn: 'root',
})
export class UserRideService {
  constructor(
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
    private userRideStore: UserRideStore,
    private profileStore: ProfileStore,
    private routerNavigation: RouterNavigation
  ) {}

  async getCurrentRide(): Promise<void> {
    try {
      const currentRide = await this.http.get<Ride>(
        API_RESSOURCE_URI.CURRENT_USER_RIDE
      );
      this.userRideStore.update({ currentRide });
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération du trajet en cours ' + e.error.error
      );
    }
  }

  async startRide(bike: Bike, startStation: Station): Promise<void> {
    try {
      const result = await this.http.post<Ride>(
        API_RESSOURCE_URI.USER_START_RIDE,
        {
          bike,
          startStation,
        }
      );
      this.userRideStore.update({ currentRide: result });
      this.snackBar.success('Le trajet a commencé !');
      this.routerNavigation.gotoHome();
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la création du trajet en cours ' + e.error.error
      );
    }
  }

  async endRide(
    ride: Ride,
    endStation: Station,
    length: number
  ): Promise<void> {
    try {
      await this.http.post<Ride>(API_RESSOURCE_URI.USER_END_RIDE, {
        ride,
        endStation,
        length,
      });
      this.snackBar.success('Le trajet est terminé !');
      this.userRideStore.update({ currentRide: null });
      this.routerNavigation.gotoHome();
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la cloture du trajet en cours ' + e.error?.error
      );
    }
  }
}
