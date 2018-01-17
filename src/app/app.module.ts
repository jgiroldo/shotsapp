import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutes } from './app.routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShotDetailsComponent } from './shot-details/shot-details.component';
import { ShotService } from './shot.service';
import { LoginCallbackComponent } from './login-callback/login-callback.component';
import { LoginCallbackService } from './login-callback/login-callback.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShotDetailsComponent,
    LoginCallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutes
  ],
  providers: [
    ShotService,
    CookieService,
    LoginCallbackService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: receiveToken,
    //   multi: true,
    //   deps: [LoginCallbackService, CookieService],
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function receiveToken(loginSvc: LoginCallbackService, cookieService: CookieService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (!cookieService.check('authCode')) {
        reject();
        loginSvc.getAuthCode();
        return;
      }
      if (!cookieService.check('authToken')) {
        reject();
        loginSvc.login();
        return;
      }
      resolve();
    });
  };
}
