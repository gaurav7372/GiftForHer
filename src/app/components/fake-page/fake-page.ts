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

  openSecretLogin(): void {
    this.openLogin.emit();
  }
}