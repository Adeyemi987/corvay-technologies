import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  features: Feature[] = [
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Operational Efficiency',
      description: 'Streamline processes and eliminate bottlenecks with intelligent automation'
    },
    {
      icon: 'M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
      title: 'Predictive Insights',
      description: 'Make data-driven decisions with advanced analytics and forecasting'
    },
    {
      icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance for your critical business data'
    }
  ];

  stats = [
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '500+', label: 'Enterprise Clients' },
    { value: '50%', label: 'Cost Reduction' },
    { value: '24/7', label: 'Support Available' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Trigger animations on load
    this.addScrollAnimations();
  }

  addScrollAnimations(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all animated elements after a short delay
    setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    }, 100);
  }

  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}
