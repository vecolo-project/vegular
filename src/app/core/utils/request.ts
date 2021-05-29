import { AxiosResponse } from 'axios';
import { requestFactory } from './requestFactory';

export interface ErrorResponse extends Error {
  response?: AxiosResponse;
}

export class Request {
  method: Function;
  currentBody: object;
  url: string;

  constructor(url: string, method: Function = requestFactory.get()) {
    this.url = url;
    this.method = method;
  }

  setBody(requestBody: object): Request {
    this.currentBody = requestBody;
    return this;
  }

  async call(): Promise<any> {
    if (typeof this.currentBody === 'undefined') {
      const res = await this.method(this.url);
      const verifiedRes = this.checkStatus(res);
      return verifiedRes.data;
    } else {
      const res = await this.method(this.url, this.currentBody);
      const verifiedRes = this.checkStatus(res);
      return verifiedRes.data;
    }
  }

  checkStatus(response: AxiosResponse): AxiosResponse {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    const error: ErrorResponse = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  static get(url: string): Request {
    return new Request(url, requestFactory.get());
  }

  static post(url: string): Request {
    return new Request(url, requestFactory.post());
  }

  static put(url: string): Request {
    return new Request(url, requestFactory.put());
  }

  static patch(url: string): Request {
    return new Request(url, requestFactory.patch());
  }

  static delete(url: string): Request {
    return new Request(url, requestFactory.delete());
  }
}
