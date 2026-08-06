import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gift-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gift-box.html',
  styleUrl: './gift-box.css'
})
export class GiftBox {

  opened = false;

  openGift() {
    this.opened = true;
  }

}