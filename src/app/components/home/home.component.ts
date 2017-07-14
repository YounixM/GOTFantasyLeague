import { Component  } from '@angular/core';
import { Directive, ElementRef, Input, Inject, OnInit } from '@angular/core';
import {HostListener} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  moduleId : module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  constructor(private _router : Router, private _authService : AuthService) {
  };

  getStarted(){

    if(this._authService.accessToken != null){
      this._router.navigate(["/alliance"]);
    }else{
      this._router.navigate(["/get-started"]);
    }
    
  }
}