import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

export const routesPath = {
  auth: 'auth',
  signup: 'auth/signup',
  profile: 'profile',
  dashboard: 'dashboard',
  subscription: 'subscription',
  subscriptions: 'subscriptions',
  ride: 'ride',
  newRide: 'ride/new',
  map: 'map',
  issue: 'issue',
  home: 'home',
  users: 'users',
  bikes: 'bikes',
  finances: 'finances',
  stations: 'stations'
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
}
