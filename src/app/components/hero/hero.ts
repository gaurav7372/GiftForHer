import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

  scrollTo(id: string): void {

    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    const navbarHeight = 80;

    const y =
      element.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });

  }

}