import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotes.html',
  styleUrl: './quotes.css'
})
export class Quotes {

  quotes = [
    {
      text: "A beautiful heart is more valuable than anything else in the world.",
      author: "❤️"
    },
    {
      text: "Keep smiling because your smile makes someone's day brighter.",
      author: "🌸"
    },
    {
      text: "You are stronger, kinder and more amazing than you realize.",
      author: "✨"
    },
    {
      text: "Some people make the world beautiful just by being in it.",
      author: "🌹"
    },
    {
      text: "Never stop being the wonderful person you are.",
      author: "💖"
    },
    {
      text: "May your life always be filled with happiness and endless smiles.",
      author: "🎀"
    }
  ];

}