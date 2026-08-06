import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-surprise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './surprise.html',
  styleUrl: './surprise.css'
})
export class Surprise {

  showMessage = false;

  reveal() {
    this.showMessage = true;
  }

}