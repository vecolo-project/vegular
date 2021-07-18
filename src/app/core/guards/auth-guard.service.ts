import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {SessionQuery} from '../store/session.query';
import {RouterNavigation} from '../router/router.navigation';
import {Snackbar} from '../../shared/snackbar/snakbar';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public routerNavigation: RouterNavigation, public sessionQuery: SessionQuery, private snackBar: Snackbar) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.sessionQuery.isLoggedIn()) {
      return true;
    }
    this.snackBar.success('Vous devez vous connecter pour accéder à cette page');
    this.routerNavigation.gotoAuth();
    return false;
  }

}
