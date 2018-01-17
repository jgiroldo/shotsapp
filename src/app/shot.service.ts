import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { OAuthService } from 'angular-oauth2-oidc';


@Injectable()
export class ShotService {
  private dribbbleUrl = 'https://api.dribbble.com/v2/user';  // URL to web api

  constructor(private http: HttpClient, private oauthService: OAuthService) { }


 

  getShots(): Observable<any> {
    debugger;
    var headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.oauthService.getAccessToken()
    });
    debugger;
    return this.http.get(this.dribbbleUrl, { headers: headers })
      .pipe();
  }

  // getWithHeader(): Observable<any> {
  // }

}
