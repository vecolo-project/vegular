import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {SessionQuery} from '../store/session.query';
import {RouterNavigation} from '../router/router.navigation';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public routerNavigation: RouterNavigation, public sessionQuery: SessionQuery) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.sessionQuery.isLoggedIn()) {
      return true;
    }
    this.routerNavigation.gotoHome();
    return false;
  }

}
