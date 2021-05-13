import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {SessionStore} from './session.store';
import {User} from '../models/user.model';
import {from, Observable, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class SessionService {

  constructor() {
  }

  login(email: string, password: string): Observable<User> {
    console.log('je passe');
    if (password !== 'esgi') {
      return of({username: 'Invalid user', email});
    }
    return of({username: 'Nospy', email});
  }


}
