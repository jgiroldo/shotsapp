import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutes } from './app.routes';
import { OAuthModule } from 'angular-oauth2-oidc';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShotDetailsComponent } from './shot-details/shot-details.component';
import { ShotService } from './shot.service';
import { OAuthService } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShotDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutes,
    OAuthModule.forRoot()
  ],
  providers: [OAuthService, ShotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
