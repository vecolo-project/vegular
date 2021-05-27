import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_URL = 'http://localhost:4562/api';

let requestFactory: RequestFactory | null = null;

export class RequestFactory {
  http: AxiosInstance;
  constructor(baseUrl: string, jwtToken?: string) {
    if (localStorage.getItem('token')) {
      jwtToken = localStorage.getItem('token');
    }
    const axiosConfig: AxiosRequestConfig = {
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    if (jwtToken) {
      axiosConfig.headers['Authorization'] = `Bearer ${jwtToken}`;
    }

    this.http = axios.create(axiosConfig);
    requestFactory = this;
  }

  static assignToken(token: string): void {
    localStorage.setItem('token', token);
    requestFactory = new RequestFactory(API_URL, token);
  }

  post(): Function {
    return this.http.post;
  }

  get(): Function {
    return this.http.get;
  }

  put(): Function {
    return this.http.put;
  }

  patch(): Function {
    return this.http.patch;
  }

  delete(): Function {
    return this.http.delete;
  }
}

requestFactory = new RequestFactory(API_URL);

export { requestFactory };
