import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {SessionQuery} from '../store/session.query';
import {RouterNavigation} from '../router/router.navigation';
import {Snackbar} from '../../shared/snackbar/snakbar';


@Injectable({providedIn: 'root'})
export class SubscriptionGuardService implements CanActivate {

  constructor(public routerNavigation: RouterNavigation, public sessionQuery: SessionQuery, private snackBar: Snackbar) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.sessionQuery.isLoggedIn() && (this.sessionQuery.getValue().user?.subscriptions?.length)) {
      return true;
    }
    this.snackBar.warnning('Vous devez posséder un abonnement pour prendre un vélo')
    this.routerNavigation.gotoHome();
    return false;
  }

}
