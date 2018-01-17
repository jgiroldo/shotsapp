import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginCallbackService } from './login-callback.service';

@Component({
  selector: 'app-login-callback',
  template: './login-callback.component.html'
})
export class LoginCallbackComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private loginSvc: LoginCallbackService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const code = params['code'];
      this.loginSvc.getAuthToken(code).subscribe(
        data => {
          this.router.navigate(['dashboard']);
        }, err => {
          console.log(err);
        });
    });
  }

}
