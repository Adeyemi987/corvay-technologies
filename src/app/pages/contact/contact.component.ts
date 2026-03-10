import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  safeFormUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeFormUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://docs.google.com/forms/d/e/1FAIpQLSeUujRdKE9XyIA3pJ0jwC8T3nCQ-jq5Y2tI55lRLI3GZgb4vg/viewform?embedded=true'
    );
  }

  contactForm: ContactForm = {
    name: '',
    email: '',
    company: '',
    message: ''
  };

  submitContactForm(): void {
    console.log('Form submitted:', this.contactForm);
    alert('Thank you for your interest! We will contact you shortly.');
    this.contactForm = {
      name: '',
      email: '',
      company: '',
      message: ''
    };
  }
}
