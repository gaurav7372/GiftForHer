import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-player.html',
  styleUrl: './music-player.css'
})
export class MusicPlayer implements AfterViewInit {

  audio = new Audio('music/song.mp3');

  playing = false;

  ngAfterViewInit() {

    this.audio.loop = true;
    this.audio.volume = 0.4;

    // Browser may block this until user interacts
    this.audio.play()
      .then(() => this.playing = true)
      .catch(() => {
        console.log('Autoplay blocked by browser.');
      });

  }

  toggleMusic() {

    if (this.playing) {

      this.audio.pause();

    } else {

      this.audio.play();

    }

    this.playing = !this.playing;

  }

}