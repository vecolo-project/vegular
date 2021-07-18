import {Injectable} from '@angular/core';
import {RidesStore} from './rides.store';
import {HttpClientWrapper} from '../../../core/utils/httpClientWrapper';
import {Snackbar} from '../../../shared/snackbar/snakbar';
import {Ride} from '../../../shared/models';
import {API_RESSOURCE_URI} from '../../../shared/api-ressource-uri/api-ressource-uri';
import {HttpTools} from '../../../shared/http-tools/http-tools';
import {RouterNavigation} from '../../../core/router/router.navigation';

@Injectable({providedIn: 'root'})
export class RidesService {
  constructor(
    private rideStore: RidesStore,
    private http: HttpClientWrapper,
    private snackBar: Snackbar,
    private routerNavigation: RouterNavigation
  ) {
  }

  async getRides(limit: number, offset: number, searchQuery?: string): Promise<void> {
    this.rideStore.setLoading(true);
    this.rideStore.set([]);
    try {
      const response = await this.http.get<{ rides: Ride[], count: number }>(
        API_RESSOURCE_URI.BASE_RIDE + '?' + HttpTools.ObjectToHttpParams({limit, offset, searchQuery}),
      );
      this.rideStore.set(response.rides);
      this.rideStore.update({count: response.count});
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la récupération des trajets : ' + e.error.error
      );
    } finally {
      this.rideStore.setLoading(false);
    }
  }

  async getRide(rideId: number): Promise<void> {
    this.rideStore.setLoading(true);
    try {
      const response = await this.http.get<Ride>(
        API_RESSOURCE_URI.BASE_RIDE + rideId
      );
      this.rideStore.update({viewRide: response});
    } catch (e) {
      this.rideStore.update({viewRide: undefined});
      this.snackBar.warnning(
        'Erreur lors de la récupération d\'un trajet : ' + e.error.error
      );
    } finally {
      this.rideStore.setLoading(false);
    }
  }

  async deleteRide(rideId: number): Promise<void> {
    this.rideStore.setLoading(true);
    try {
      await this.http.delete(
        API_RESSOURCE_URI.BASE_RIDE + rideId
      );
      this.rideStore.remove(rideId);
      this.snackBar.success('Le trajet a été supprimé');
    } catch (e) {
      this.rideStore.update({viewRide: undefined});
      this.snackBar.warnning(
        'Erreur lors de la suppression d\'un trajet : ' + e.error.error
      );
    } finally {
      this.routerNavigation.gotoRideList();
      this.rideStore.setLoading(false);
    }
  }

  async createRide(ride: Ride): Promise<void> {
    this.rideStore.setLoading(true);
    try {
      const response = await this.http.post<Ride>(
        API_RESSOURCE_URI.BASE_RIDE,
        ride
      );
      this.rideStore.add(response);
      this.snackBar.success('Le trajet a été créé');
      this.routerNavigation.gotoRideList();
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la création d\'un trajet : ' + e.error.error
      );
    } finally {
      this.rideStore.setLoading(false);
    }
  }

  async updateRide(ride: Ride): Promise<void> {
    this.rideStore.setLoading(true);
    try {
      const response = await this.http.put<Ride>(
        API_RESSOURCE_URI.BASE_RIDE + ride.id,
        ride
      );
      this.rideStore.update(ride.id, ride);
      this.rideStore.update({viewRide: ride});
      this.snackBar.success('Le trajet a été mis à jour');
    } catch (e) {
      this.snackBar.warnning(
        'Erreur lors de la mise à jour d\'un trajet : ' + e.error.error
      );
    } finally {
      this.rideStore.setLoading(false);
    }
  }

}
