import { Component } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { authConfig } from './auth.config';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    private http: HttpClient,
    private oauthService: OAuthService
  ) {
    // this.configureWithNewConfigApi();  
  }

  ngOnInit() {
//     const params = {
//       'client_id': 'a3f9ec31788a8a46e08be755a9ff17c2bf918f10e7ddfb4ecf929bb8d2bea2bc'
//     };

//     this.http.get('https://dribbble.com/oauth/authorize', { params: params }).subscribe(
//       data => {
// debugger;
//       },
//       err => {

//       });
  }

  // private configureWithNewConfigApi() {
  //   this.oauthService.configure(authConfig);
  //   this.oauthService.tokenValidationHandler = new JwksValidationHandler();
  //   this.oauthService.loadDiscoveryDocumentAndTryLogin();

  //   // // Optional
  //   // this.oauthService.setupAutomaticSilentRefresh();

  //   // this.oauthService.events.subscribe(e => {
  //   //   console.debug('oauth/oidc event', e);
  //   // });

  //   // this.oauthService.events.filter(e => e.type === 'session_terminated').subscribe(e => {
  //   //   console.debug('Your session has been terminated!');
  //   // });
  //   // this.oauthService.events.filter(e => e.type === 'token_received').subscribe(e => {
  //   //   // this.oauthService.loadUserProfile();
  //   // });

  // }
}
