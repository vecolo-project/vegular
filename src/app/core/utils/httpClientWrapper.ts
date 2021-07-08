import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionQuery } from '../store/session.query';

@Injectable()
export class HttpClientWrapper {
  constructor(private http: HttpClient, private sessionQuery: SessionQuery) {}

  async get<T>(url: string): Promise<T> {
    return await this.http.get<T>(url, await this.getHeaders()).toPromise();
  }

  async delete<T>(url: string): Promise<T> {
    return await this.http.delete<T>(url, await this.getHeaders()).toPromise();
  }

  async post<T>(
    url: string,
    body: any,
    additionalHeader?: { [key: string]: string }
  ): Promise<T> {
    return await this.http
      .post<T>(url, body, await this.getHeaders(additionalHeader))
      .toPromise();
  }

  async upload<T>(url: string, body: any): Promise<T> {
    return await this.http
      .post<T>(url, body, await this.getHeadersForUpload())
      .toPromise();
  }

  async put<T>(url: string, body: object): Promise<T> {
    return await this.http
      .put<T>(url, body, await this.getHeaders())
      .toPromise();
  }

  async patch<T>(url: string, body: object): Promise<T> {
    return await this.http
      .patch<T>(url, body, await this.getHeaders())
      .toPromise();
  }

  private async getHeadersForUpload(): Promise<object> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', await this.getAuthToken());
    return { headers };
  }

  private async getHeaders(additionalHeader?: {
    [key: string]: string;
  }): Promise<object> {
    const lines = new Map<string, string>();
    lines.set('Content-Type', 'application/json');
    lines.set('Authorization', await this.getAuthToken());
    if (additionalHeader) {
      for (const key in additionalHeader) {
        lines.set(key, additionalHeader[key]);
      }
    }
    // HttpHeaders value arre not overwirteable when they are set
    let headers = new HttpHeaders();
    lines.forEach((value, key) => {
      headers = headers.set(key, value);
    });
    return { headers };
  }

  private async getAuthToken(): Promise<string> {
    if (this.sessionQuery.isLoggedIn()) {
      const token = await this.sessionQuery.getToken();
      return 'Bearer ' + token;
    }
    return '';
  }
}
