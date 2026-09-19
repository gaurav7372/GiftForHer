import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

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


  closeNavbar(): void {

    const navbarMenu =
      document.getElementById('navbarMenu');

    if (!navbarMenu) {
      return;
    }

    // Close Bootstrap mobile menu
    navbarMenu.classList.remove('show');

    const toggler =
      document.querySelector('.navbar-toggler');

    if (toggler) {
      toggler.setAttribute(
        'aria-expanded',
        'false'
      );
    }

  }

}