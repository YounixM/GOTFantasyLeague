import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GamePlayComponent } from './components/game-play/game-play.component';
import { PointsSystemComponent } from './components/points-system/points-system.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AllianceComponent } from './components/alliance/alliance.component';
import { GetStartedComponent } from './components/get-started/get-started.component';

import {AuthService} from './services/auth.service';

import { FacebookModule } from 'ngx-facebook';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamePlayComponent,
    PointsSystemComponent,
    SignUpComponent,
    LoginComponent,
    AllianceComponent,
    GetStartedComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FacebookModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
