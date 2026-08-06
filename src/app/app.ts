import { Component } from '@angular/core';

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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    GiftBox,
    Message,
    Gallery,
    Timeline,
    Reasons,
    Quotes,
    Surprise,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}