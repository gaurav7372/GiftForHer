import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reasons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reasons.html',
  styleUrl: './reasons.css'
})
export class Reasons {

  reasons = [
    { icon:'😊', title:'Your Smile', text:'Your smile brightens every room.' },
    { icon:'💖', title:'Kind Heart', text:'You always care about others.' },
    { icon:'🌸', title:'Beautiful Soul', text:'Your personality is wonderful.' },
    { icon:'✨', title:'Positive Energy', text:'You spread happiness everywhere.' },
    { icon:'🌹', title:'Graceful', text:'You make ordinary moments special.' },
    { icon:'🦋', title:'Unique', text:'There is no one else like you.' },
    { icon:'🎀', title:'Thoughtful', text:'You remember the little things.' },
    { icon:'🌈', title:'Inspiring', text:'You motivate people around you.' },
    { icon:'⭐', title:'Brilliant', text:'You shine in everything you do.' },
    { icon:'🎵', title:'Joyful', text:'Your laughter is contagious.' },
    { icon:'💝', title:'Caring', text:'You make people feel important.' },
    { icon:'❤️', title:'Simply Amazing', text:'Just being yourself is enough.' }
  ];

}