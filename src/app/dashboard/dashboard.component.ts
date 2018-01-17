import { Component, OnInit } from '@angular/core';
import { ShotService } from '../shot.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginCallbackService } from '../login-callback/login-callback.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  shotList: Array<any>;

  constructor(private http: HttpClient, private loginSvc: LoginCallbackService) {
  }

  ngOnInit() {
    this.loginSvc.getAuthCode();
  }


}
