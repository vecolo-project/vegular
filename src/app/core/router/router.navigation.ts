import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

export const routesPath = {
  auth: 'auth',
  signup: 'auth/signup',
  profile: 'profile',
  subscription: 'subscription',
  subscriptions: 'subscriptions',
  rides: 'rides',
  newRide: 'rides/new',
  map: 'map',
  issue: 'issue',
  home: 'home',
  users: 'users',
  bikes: 'bikes',
  finances: 'finances',
  stations: 'stations',
  stationView: 'stations/view'
};

@Injectable()
export class RouterNavigation {
  constructor(private router: Router) {
  }

  gotoAuth(): void {
    this.router.navigate([routesPath.auth]);
  }

  gotoSignup(): void {
    this.router.navigate([routesPath.signup]);
  }

  gotoProfile(): void {
    this.router.navigate([routesPath.profile]);
  }

  gotoHome(): void {
    this.router.navigate([routesPath.home]);
  }

  gotoStationList(): void {
    this.router.navigate([routesPath.stations]);
  }

  gotoStationView(stationId: number): void {
    this.router.navigate([routesPath.stationView + '/' + stationId]);
  }
  gotoBikeEdit(stationId: number): void {
    this.router.navigate([routesPath.bikes + '/edit/' + stationId]);
  }
}
