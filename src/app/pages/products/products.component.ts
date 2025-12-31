import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Product {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  url: string;
  color: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
  products: Product[] = [
    {
      name: 'SaaS-Connect',
      tagline: 'Enterprise SaaS integration for operational efficiency',
      description: 'A platform connecting enterprise systems to automate workflows, reduce bottlenecks, and provide actionable operational insights.',
      features: [
        'Data integration across multiple systems',
        'Predictive analytics for cost savings',
        'Workflow automation and alerts',
        'Enterprise-grade security',
        'Real-time monitoring dashboards',
        'API-first architecture'
      ],
      url: 'https://saas-connect.onrender.com/',
      color: 'primary'
    },
    {
      name: 'Ecolytix',
      tagline: 'Sustainability insights for enterprise operations',
      description: 'A platform helping organizations track, measure, and optimize sustainability metrics across their operations.',
      features: [
        'Carbon footprint analytics',
        'Resource efficiency tracking',
        'Compliance & reporting dashboards',
        'Predictive sustainability insights',
        'ESG performance metrics',
        'Automated compliance reports'
      ],
      url: 'https://sustainability-plat.onrender.com/',
      color: 'accent'
    }
  ];

  constructor(private router: Router) {}

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}
