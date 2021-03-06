import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export const routesPath = {
  auth: 'auth',
  signup: 'auth/signup',
  profile: 'profile',
  subscriptions: 'subscriptions',
  subscriptionAdd: 'subscriptions/add',
  subscriptionView: 'subscriptions/view',
  planAdd: 'subscriptions/plan/add',
  planView: 'subscriptions/plan/view',
  subscription: 'subscription',
  userRides: 'user-rides',
  map: 'map',
  issue: 'issue',
  home: 'home',
  users: 'users',
  userView: 'users/view',
  bikes: 'bikes',
  bikesView: 'bikes/view',
  statistics: 'statistics',
  stations: 'stations',
  stationView: 'stations/view',
  rides: 'rides',
  ridesView: 'rides/view',
  forgotPassword: '/auth/forgot-password',
};

@Injectable()
export class RouterNavigation {
  constructor(private router: Router) {}

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

  gotoSubscriptionList(): void {
    this.router.navigate([routesPath.subscriptions]);
  }

  gotoSubscriptionView(subscriptionId: number): void {
    this.router.navigate([routesPath.subscriptionView + '/' + subscriptionId]);
  }

  gotoSubscriptionAdd(): void {
    this.router.navigate([routesPath.subscriptionAdd]);
  }

  gotoPlanView(planId: number): void {
    this.router.navigate([routesPath.planView + '/' + planId]);
  }

  gotoPlanAdd(): void {
    this.router.navigate([routesPath.planAdd]);
  }

  gotoStationView(stationId: number): void {
    this.router.navigate([routesPath.stationView + '/' + stationId]);
  }

  gotoBikeView(bikeId: number): void {
    this.router.navigate([routesPath.bikesView + '/' + bikeId]);
  }

  gotoBikeEdit(stationId: number): void {
    this.router.navigate([routesPath.bikes + '/edit/' + stationId]);
  }

  gotoUserView(userId: number): void {
    this.router.navigate([routesPath.userView + '/' + userId]);
  }

  gotoUserList(): void {
    this.router.navigate([routesPath.users]);
  }

  gotoRideList(): void {
    this.router.navigate([routesPath.rides]);
  }

  gotoRideView(id: number): void {
    this.router.navigate([routesPath.ridesView + '/' + id]);
  }

  gotoStatistics(): void {
    this.router.navigate([routesPath.statistics]);
  }

  gotoForgotPassword(): void {
    this.router.navigate([routesPath.forgotPassword]);
  }
}
