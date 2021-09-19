import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  token: string;

  constructor(private http: HttpClient) {
    this.token = 'ASD';
  }

  createAuthorizationHeader(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('accept', 'application/json');
    headers = headers.set('x-api-key', `BigProfiles-API`);
    return headers;
  }

  post(url: string, data: object): Observable<any> {
    let header: HttpHeaders = this.createAuthorizationHeader();
    return this.http.post(url, data, {
      headers: header
    });

  }

  get(url: string, params: HttpParams): Observable<any> {
    let header: HttpHeaders = this.createAuthorizationHeader();
    return this.http.get(url, {
      observe: 'response',
      headers: header,
      params: params
    });

  }
}
