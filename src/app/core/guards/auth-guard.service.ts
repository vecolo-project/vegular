import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SessionQuery} from '../state/session.query';
import {RouterNavigation} from '../router/router.navigation';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public routerNavigation: RouterNavigation, public sessionQuery: SessionQuery) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.sessionQuery.isLoggedIn()) {
      return true;
    }
    this.routerNavigation.gotoLogin();
    return false;
  }

}
