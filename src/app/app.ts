import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    CommonModule,

    FakePage,
    Login,

    Navbar,
    Hero,
    GiftBox,
    Message,
    Gallery,
    Timeline,
    Reasons,
    Quotes,
    Surprise,
    Footer,
    MusicPlayer
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  page: 'fake' | 'login' | 'website' = 'fake';

  openLogin(): void {
    this.page = 'login';
  }

  unlockWebsite(): void {
    this.page = 'website';
  }
}