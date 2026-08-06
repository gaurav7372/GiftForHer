import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css'
})
export class Timeline {

  events = [
    {
      icon: '🌸',
      title: 'A Beautiful Beginning',
      date: 'The Day We Met',
      description: 'Every beautiful story starts with a simple hello.'
    },
    {
      icon: '💖',
      title: 'Wonderful Conversations',
      date: 'Getting to Know You',
      description: 'Every conversation became a beautiful memory.'
    },
    {
      icon: '✨',
      title: 'Special Memories',
      date: 'Happy Moments',
      description: 'The little moments became unforgettable memories.'
    },
    {
      icon: '🌹',
      title: 'Today',
      date: 'Still Smiling',
      description: 'This website is a small gift to make you smile.'
    }
  ];

}