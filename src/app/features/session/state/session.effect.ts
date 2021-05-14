import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@datorama/akita-ng-effects';
import {SessionService} from './session.service';
import {Router} from '@angular/router';
import {SessionStore} from './session.store';
import {login, loginFail, loginSuccess} from './session.actions';
import {map, switchMap, tap} from 'rxjs/operators';

@Injectable()
export class SessionEffect {

  constructor(private action$: Actions, private sessionStore: SessionStore,
              private sessionService: SessionService, private router: Router) {
  }

  @Effect({dispatch: true})
  login$ = this.action$.pipe(
    ofType(login),
    switchMap(({email, password}) =>
      this.sessionService.login(email, password).pipe(
        map((user) => {
          if (user) {
            this.action$.dispatch(loginSuccess(user));
            this.action$.dispatch(loginFail());
          } else {
            this.action$.dispatch(loginFail());
          }
        })
      ))
  );

  @Effect({dispatch: true})
  loginSuccess$ = this.action$.pipe(
    ofType(loginSuccess),
    map((user) => {
        this.sessionStore.setUser(user);
        this.router.navigateByUrl('/profile');
      }
    )
  );
}
