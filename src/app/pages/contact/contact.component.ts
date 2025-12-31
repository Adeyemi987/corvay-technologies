import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
