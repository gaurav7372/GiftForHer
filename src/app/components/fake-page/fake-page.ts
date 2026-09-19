import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-fake-page',
  standalone: true,
  imports: [],
  templateUrl: './fake-page.html',
  styleUrl: './fake-page.css'
})
export class FakePage {

  @Output() openLogin = new EventEmitter<void>();

  private warningClicks = 0;

  openSecretLogin(): void {
    this.warningClicks++;

    // Open Login after 3 clicks on ⚠️
    if (this.warningClicks >= 3) {
      this.warningClicks = 0;
      this.openLogin.emit();
    }
  }
}