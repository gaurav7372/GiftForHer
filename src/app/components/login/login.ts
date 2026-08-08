import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  @Output() unlocked = new EventEmitter<void>();

  pin = '';

  readonly correctPin = '2504';

  errorMessage = '';

  isLoading = false;


  addDigit(digit: string): void {

    // Don't allow more than 4 digits
    if (this.pin.length >= 4 || this.isLoading) {
      return;
    }

    this.pin += digit;

    // Remove old error message
    this.errorMessage = '';
  }


  deleteDigit(): void {

    if (this.isLoading) {
      return;
    }

    this.pin = this.pin.slice(0, -1);

    this.errorMessage = '';
  }


  enterPin(): void {

    // Don't allow another click while opening
    if (this.isLoading) {
      return;
    }


    // Check for incomplete PIN
    if (this.pin.length !== 4) {

      this.errorMessage =
        'Areee Shivani 😜 4 digit PIN enter kar na! 💕';

      return;
    }


    // Wrong PIN
    if (this.pin !== this.correctPin) {

      this.errorMessage =
        'Ye pagal Garry la vichar PIN 😜😂💕';

      // Clear PIN after a short delay
      setTimeout(() => {
        this.pin = '';
      }, 700);

      return;
    }


    // Correct PIN
    this.isLoading = true;

    sessionStorage.setItem(
      'giftForHerUnlocked',
      'true'
    );


    // Small opening animation
    setTimeout(() => {

      this.isLoading = false;

      // Tell App that login is successful
      this.unlocked.emit();

    }, 700);
  }

}