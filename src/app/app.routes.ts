import { Routes } from '@angular/router';

import { FakePage } from './components/fake-page/fake-page';
import { Login } from './components/login/login';

import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { GiftBox } from './components/gift-box/gift-box';
import { Message } from './components/message/message';
import { Gallery } from './components/gallery/gallery';
import { Timeline } from './components/timeline/timeline';
import { Reasons } from './components/reasons/reasons';
import { Quotes } from './components/quotes/quotes';
import { Surprise } from './components/surprise/surprise';
import { Footer } from './components/footer/footer';
import { MusicPlayer } from './components/music-player/music-player';

export const routes: Routes = [

  // First page
  {
    path: '',
    redirectTo: 'fake-page',
    pathMatch: 'full'
  },

  // Fake disabled page
  {
    path: 'fake-page',
    component: FakePage
  },

  // Secret PIN login
  {
    path: 'login',
    component: Login
  },

  // Actual birthday website
  {
    path: 'home',
    children: [
      {
        path: '',
        component: Navbar
      },
      {
        path: '',
        component: Hero
      }
    ]
  },

  // Unknown URL
  {
    path: '**',
    redirectTo: 'fake-page'
  }

];