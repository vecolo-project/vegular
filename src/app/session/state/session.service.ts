import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {SessionStore} from './session.store';

@Injectable({providedIn: 'root'})
export class SessionService {

  constructor(private sessionStore: SessionStore, private http: HttpClient) {
  }

  login(email: string, password: string): void {
    this.sessionStore.update({
      user: {
        email: 'nospy@mail.fr',
        username: 'nospy'
      }
    });
  }


}
