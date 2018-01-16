import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'https://dribbble.com/oauth/authorize',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // URL of the SPA to redirect the user after silent refresh
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',

  // The App is registerd with this id at the auth-server
  clientId: 'a3f9ec31788a8a46e08be755a9ff17c2bf918f10e7ddfb4ecf929bb8d2bea2bc',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email voucher',

  showDebugInformation: true,

  sessionChecksEnabled: true

}

