import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

export const routesPath = {
  auth: 'auth',
  profile: 'profile',
  addUser: 'add-user',
  home: ''
};

@Injectable()
export class RouterNavigation {
  constructor(private router: Router) {
  }

  gotoAuth(): void {
    this.router.navigate([routesPath.auth]);
  }

  gotoProfile(): void {
    this.router.navigate([routesPath.profile]);
  }

  gotoAddUser(): void {
    this.router.navigate([routesPath.addUser]);
  }
  gotoHome(): void {
    this.router.navigate([routesPath.home]);
  }
}
