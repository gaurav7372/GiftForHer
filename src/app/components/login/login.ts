import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit, OnDestroy {

  @Output() unlocked = new EventEmitter<void>();

  pin = '';

  errorMessage = '';

  isLoading = false;

  secondsLeft = 60;

  private timer: ReturnType<typeof setInterval> | null = null;


  constructor(
    private cdr: ChangeDetectorRef
  ) {}


  ngOnInit(): void {

    // Calculate immediately
    this.updateCountdown();


    // Update every second
    this.timer = setInterval(() => {

      this.updateCountdown();

      // Force Angular to refresh the HTML
      this.cdr.detectChanges();

    }, 1000);

  }


  ngOnDestroy(): void {

    if (this.timer !== null) {

      clearInterval(this.timer);

      this.timer = null;

    }

  }


  // =========================================
  // CURRENT TIME PIN
  // =========================================

  private getCurrentPin(): string {

    const now = new Date();

    const hours = now
      .getHours()
      .toString()
      .padStart(2, '0');

    const minutes = now
      .getMinutes()
      .toString()
      .padStart(2, '0');

    return hours + minutes;

  }


  // =========================================
  // REALTIME COUNTDOWN
  // =========================================

  private updateCountdown(): void {

    const now = new Date();

    const seconds = now.getSeconds();

    this.secondsLeft = 60 - seconds;

  }


  // =========================================
  // COUNTDOWN DISPLAY
  // =========================================

  get countdown(): string {

    if (this.secondsLeft === 60) {

      return '01:00';

    }

    return `00:${this.secondsLeft
      .toString()
      .padStart(2, '0')}`;

  }


  // =========================================
  // ADD DIGIT
  // =========================================

  addDigit(digit: string): void {

    if (this.isLoading) {
      return;
    }

    if (this.pin.length >= 4) {
      return;
    }

    this.pin += digit;

    this.errorMessage = '';

  }


  // =========================================
  // DELETE DIGIT
  // =========================================

  deleteDigit(): void {

    if (this.isLoading) {
      return;
    }

    this.pin =
      this.pin.slice(0, -1);

    this.errorMessage = '';

  }


  // =========================================
  // ENTER PIN
  // =========================================

  enterPin(): void {

    if (this.isLoading) {
      return;
    }


    // Incomplete PIN

    if (this.pin.length !== 4) {

      this.errorMessage =
        'Areee Shivani 😜 4 digit PIN enter kar na! 💕';

      return;

    }


    // Generate the PIN at the exact
    // moment Enter is clicked

    const currentPin =
      this.getCurrentPin();


    // Wrong PIN

    if (this.pin !== currentPin) {

      this.errorMessage =
        'Ye pagal Garry la vichar PIN 😜😂💕';


      setTimeout(() => {

        this.pin = '';

        this.cdr.detectChanges();

      }, 700);

      return;

    }


    // Correct PIN

    this.isLoading = true;

    sessionStorage.setItem(
      'giftForHerUnlocked',
      'true'
    );


    setTimeout(() => {

      this.isLoading = false;

      this.unlocked.emit();

      this.cdr.detectChanges();

    }, 700);

  }

}