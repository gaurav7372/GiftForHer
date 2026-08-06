import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  closeNavbar() {

    const navbar = document.getElementById('navbarMenu');

    if (navbar && navbar.classList.contains('show')) {

      const collapse =
        bootstrap.Collapse.getInstance(navbar) ||
        new bootstrap.Collapse(navbar, {
          toggle: false
        });

      collapse.hide();

    }

  }

}