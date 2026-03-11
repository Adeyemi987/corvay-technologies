import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface Product {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  url?: string;
  routerLink?: string;
  color: string;
  badge?: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
  products: Product[] = [
    {
      name: 'DevAssist AI',
      tagline: 'Secure AI-powered API integration for modern developers',
      description: 'An intelligent integration assistant that helps developers understand and integrate APIs faster while giving organizations a secure, controlled environment for processing API documentation.',
      features: [
        'Secure AI environment for API documentation',
        'Instant endpoint and auth flow understanding',
        'Swagger / OpenAPI specification support',
        'Enterprise governance and audit trail',
        'Integration-ready logic generation',
        'Built for developer teams and enterprises'
      ],
      routerLink: '/products/devassist',
      color: 'violet',
      badge: 'New'
    },
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
