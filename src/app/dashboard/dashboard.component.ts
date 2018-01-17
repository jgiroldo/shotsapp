import { Component, OnInit } from '@angular/core';
import { ShotService } from '../shot.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  shotList: Array<any>;

  // constructor(private shotSvc: ShotService) { }

  // ngOnInit() {
  //   debugger;
  //   this.shotSvc.getShots().subscribe(
  //     data => {
  //       debugger;
  //       this.shotList = data;
  //     },
  //     err => {
  //       debugger;

  //     });
  // }

  constructor(private http: HttpClient) {
  }

  public login() {
    window.location.href =
      'https://dribbble.com/oauth/authorize?client_id=a3f9ec31788a8a46e08be755a9ff17c2bf918f10e7ddfb4ecf929bb8d2bea2bc';

    // const params = {
    //   'client_id': 'a3f9ec31788a8a46e08be755a9ff17c2bf918f10e7ddfb4ecf929bb8d2bea2bc'
    // };

    // this.http.get('https://dribbble.com/oauth/authorize', { params: params }).subscribe(
    //   data => {
    //     debugger;
    //   },
    //   err => {

    //   });
  }

  public logoff() {
    // this.oauthService.logOut();
  }

  // public get name() {
  //     let claims = this.oauthService.getIdentityClaims();
  //     if (!claims) return null;
  //     return claims.given_name;
  // }

}
