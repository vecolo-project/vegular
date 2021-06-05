import {HttpParams} from '@angular/common/http';

export class HttpTools {

  public static ObjectToHttpParams(params: object, httpParams = new HttpParams()): HttpParams {
    Object.keys(params)
      .filter(key => {
        const v = params[key];
        return (Array.isArray(v) || typeof v === 'string') ?
          (v.length > 0) :
          (v !== null && v !== undefined);
      })
      .forEach(key => {
        httpParams = httpParams.append(key, params[key]);
      });
    return httpParams;
  }

  public static ValuesToHttpParams(key: string, values: any, httpParams = new HttpParams()): HttpParams {
    values.map(
      value => httpParams = httpParams.append(key, value)
    );
    return httpParams;
  }
}
