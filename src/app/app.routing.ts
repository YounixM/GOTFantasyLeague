import { ModuleWithProviders } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { AllianceComponent } from './components/alliance/alliance.component';
import { GamePlayComponent } from './components/game-play/game-play.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'GOT Fantasy League | Home',
      metaKeywords: '',
      metaDesc: ''
    },
  },
  {
    path: 'get-started',
    component: GetStartedComponent,
    data: {
      title: 'GOT Fantasy League | Get Started',
      metaKeywords: '',
      metaDesc: ''
    },
  },
  {
    path: 'alliance',
    component: AllianceComponent,
    data: {
      title: 'GOT Fantasy League | Join Alliance',
      metaKeywords: '',
      metaDesc: ''
    },
  },
  {
    path: 'game-play',
    component: GamePlayComponent,
    data: {
      title: 'GOT Fantasy League | GamePlay',
      metaKeywords: '',
      metaDesc: ''
    },
    
  } , 
  {
    path: 'leaderboard',
    component: LeaderboardComponent,
    data: {
      title: 'GOT Fantasy League | Leaderboard',
      metaKeywords: '',
      metaDesc: ''
    }
  }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules });
