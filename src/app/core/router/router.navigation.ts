import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

export const routesPath = {
  login: 'login',
  profile: 'profile'
};

@Injectable()
export class RouterNavigation {


  constructor(private router: Router) {
  }

  gotoLogin(): void {
    this.router.navigate([routesPath.login]);
  }
  gotoProfile(): void {
    this.router.navigate([routesPath.profile]);
  }
}
