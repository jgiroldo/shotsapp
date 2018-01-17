import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginCallbackService {

  constructor(private cookieService: CookieService, private http: HttpClient) { }

  getAuthCode() {
    window.location.href =
      'https://dribbble.com/oauth/authorize?client_id=' + environment.client_id + '&scope=' + environment.scope;
  }

  getAuthToken(code: string): Observable<any> {
    debugger;
    const headers = new Headers(
      {
        'Access-Control-Allow-Origin': 'http://localhost:4200'
      }
    );

    const params = {
      'client_id': environment.client_id,
      'client_secret': environment.client_secret,
      'code': code
    };

    return this.http.post(environment.getTokenUrl, { headers: headers }, { params: params })
      .map(this.handleData)
      .catch(this.handleError);

  }

  setCode(code: string) {
    const obj = {
      'code': code
    };
    const objStr = JSON.stringify(obj);
    this.cookieService.delete('authCode', '/');
    this.cookieService.set('authCode', objStr, null, '/');
  }

  setToken(token: string, type: string, scope: string) {
    const obj = {
      'access_token': token,
      'token_type': type,
      'scope': scope
    };
    const objStr = JSON.stringify(obj);
    this.cookieService.delete('authToken', '/');
    this.cookieService.set('authToken', objStr, null, '/');
  }

  private handleData(res: Response) {
    const body = res.json();
    return body;
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  login() {
    console.log('aqui');
  }


}
