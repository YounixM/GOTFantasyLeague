import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { FacebookService, InitParams } from 'ngx-facebook';
import { AuthService } from './services/auth.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  isUserLoggedIn = false;
  username  =  null;

  constructor(private fb: FacebookService, private _router: Router, private _authservice: AuthService, private route: ActivatedRoute) {

    let initParams: InitParams = {
      appId: '455075384862999',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);

  }

  isLoggedIn() {
    if (this._authservice.accessToken != null) {
      this.isUserLoggedIn = true;
    };
  }

  loggedIn(event) {
    if (this._authservice.accessToken != null) {
      this.isUserLoggedIn = true;
    };
  }

  logout() {
    this.fb.logout().then(() => {
      this._authservice.accessToken = null;
      this.isUserLoggedIn = false;
      this._router.navigate(['/home']);
    });
  }

  ngOnInit() {
    this._router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        if (this._authservice.accessToken != null) {
          this.isUserLoggedIn = true;
          this.username = this._authservice.username;
        };
      });

  }


}
