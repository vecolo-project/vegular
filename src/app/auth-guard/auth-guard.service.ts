import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SessionQuery} from '../features/session/state/session.query';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public router: Router, public sessionQuery: SessionQuery) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.sessionQuery.isLoggedIn()) {
      return true;
    }
    this.router.navigateByUrl('login');
    return false;
  }

}
