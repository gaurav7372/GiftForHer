import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ IMPORTANT

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule], // ✅ Add this
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit {

  currentYear = new Date().getFullYear();
  currentDateTime: Date = new Date();

  ngOnInit() {
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }
}