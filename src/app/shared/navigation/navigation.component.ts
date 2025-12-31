import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  mobileMenuOpen = false;
  productsDropdownOpen = false;
  currentYear = new Date().getFullYear();
  private dropdownTimeout: any;

  products = [
    { name: 'SaaS-Connect', url: 'https://saas-connect.onrender.com/' },
    { name: 'Ecolytix', url: 'https://sustainability-plat.onrender.com/' }
  ];

  constructor(private router: Router) {}

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    this.productsDropdownOpen = false;
  }

  toggleProductsDropdown(): void {
    this.productsDropdownOpen = !this.productsDropdownOpen;
  }

  openProductsDropdown(): void {
    if (this.dropdownTimeout) {
      clearTimeout(this.dropdownTimeout);
    }
    this.productsDropdownOpen = true;
  }

  closeProductsDropdown(): void {
    this.dropdownTimeout = setTimeout(() => {
      this.productsDropdownOpen = false;
    }, 200);
  }

  cancelCloseDropdown(): void {
    if (this.dropdownTimeout) {
      clearTimeout(this.dropdownTimeout);
    }
  }
}
