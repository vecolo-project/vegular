import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@datorama/akita-ng-effects';
import {SessionService} from './session.service';
import {Router} from '@angular/router';
import {SessionStore} from './session.store';
import {login, loginFail, loginSuccess} from './session.actions';
import {map, switchMap} from 'rxjs/operators';

@Injectable()
export class SessionEffect {

  constructor(private action$: Actions, private sessionStore: SessionStore,
              private sessionService: SessionService, private router: Router) {
  }

  @Effect()
  login$ = this.action$.pipe(
    ofType(login),
    map(({email, password}) =>
      this.sessionService.login(email, password).pipe(
        map((user) => {
          if (user !== null) {
            this.action$.dispatch(loginSuccess(user));
          } else {
            this.action$.dispatch(loginFail());
          }
        })
      ))
  );

  @Effect()
  loginSuccess$ = this.action$.pipe(
    ofType(loginSuccess),
    map((user) => {
        this.sessionStore.setUser(user);
        this.router.navigateByUrl('/profile');
      }
    )
  );
}
