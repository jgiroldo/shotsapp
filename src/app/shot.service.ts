import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class ShotService {
  private dribbbleUrl = 'https://api.dribbble.com/v2';  // URL to web api

  constructor(private http: HttpClient) { }
  // getShots(): Observable<any> {
  // }

}
