import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookService, LoginResponse, LoginOptions } from 'ngx-facebook';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  @Output() loggedInEvent = new EventEmitter<boolean>();

  constructor(private fb: FacebookService, private router: Router, private _authService: AuthService) { }

  options: LoginOptions = {
    scope: 'public_profile,user_friends,email',
    return_scopes: true,
    enable_profile_selector: true
  };

  loginWithFacebook(): void {

    this.fb.login(this.options)
      .then((response) => {
        let userID =  response.authResponse.userID;
        this._authService.login(response);
        this.loggedInEvent.emit(true);
        let user = '/' + userID
        var promise = this.fb.api(user);
        promise.then((res) => {
          console.log(res);
          this._authService.username = res.name;
          this.router.navigate(['/alliance']);  
        });
      })
      .catch((error: any) => console.error(error));

  }

  ngOnInit() {

  }

}
