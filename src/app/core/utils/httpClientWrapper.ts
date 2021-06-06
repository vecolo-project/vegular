import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SessionQuery} from '../store/session.query';
import {HttpTools} from '../../shared/http-tools/http-tools';

@Injectable()
export class HttpClientWrapper {
  constructor(private http: HttpClient, private sessionQuery: SessionQuery) {
  }

  async get<T>(url: string): Promise<T> {
    return await this.http.get<T>(url, {
      headers: new HttpHeaders().set('Authorization', await this.getAuthToken())
    }).toPromise();
  }

  async delete<T>(url: string): Promise<T> {
    return await this.http.delete<T>(url, {
      headers: new HttpHeaders().set('Authorization', await this.getAuthToken())
    }).toPromise();
  }

  async post<T>(url: string, body: object): Promise<T> {
    return await this.http.post<T>(url,
      body, {
        headers: new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', await this.getAuthToken())
      }).toPromise();
  }

  async put<T>(url: string, body: object): Promise<T> {
    return await this.http.put<T>(url,
      HttpTools.ObjectToHttpParams(body).toString(), {
        headers: new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', await this.getAuthToken())
      }).toPromise();
  }

  async patch<T>(url: string, body: object): Promise<T> {
    return await this.http.patch<T>(url,
      HttpTools.ObjectToHttpParams(body).toString(), {
        headers: new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', await this.getAuthToken())
      }).toPromise();
  }

  async getAuthToken(): Promise<string> {
    if (this.sessionQuery.isLoggedIn()) {
      return 'Bearer ' + await this.sessionQuery.getToken();
    }
    return '';
  }
}
