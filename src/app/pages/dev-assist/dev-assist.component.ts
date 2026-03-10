import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dev-assist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dev-assist.component.html',
  styleUrl: './dev-assist.component.css'
})
export class DevAssistComponent implements OnInit, OnDestroy {

  activeTab = 0;
  carouselIndex = 0;
  private carouselTimer: any;

  problems = [
    { icon: '📄', title: '40+ Pages of Documentation', desc: 'Developers drown in lengthy API docs before writing a single line of integration code.' },
    { icon: '🔐', title: 'Unclear Auth Flows', desc: 'Authentication patterns vary wildly — OAuth, API keys, JWT — each with different nuances.' },
    { icon: '🔀', title: 'Multiple API Versions', desc: 'Juggling v1, v2, and v3 endpoints with inconsistent examples creates confusion and bugs.' },
    { icon: '⏳', title: 'Days of Waiting', desc: 'Support queues mean developers are blocked for hours or days on simple integration questions.' },
  ];

  risks = [
    { icon: '⚠️', title: 'Sensitive Data Exposure', desc: 'API specs pasted into public AI tools may contain confidential business logic and credentials.' },
    { icon: '🔓', title: 'Auth Structure Leaks', desc: 'Authentication flows and internal API architecture can become exposed outside the organization.' },
    { icon: '🕵️', title: 'No Audit Trail', desc: 'There is zero governance or visibility over what API information is being shared with public AI systems.' },
    { icon: '🏛️', title: 'Compliance Concerns', desc: 'For fintech and enterprises, using public AI for internal docs violates security and compliance policies.' },
  ];

  howItWorks = [
    {
      step: '01',
      icon: '📋',
      title: 'Provide the API Specification',
      desc: 'Developers submit an API specification such as a Swagger / OpenAPI URL into the DevAssist platform.',
      color: 'from-violet-500 to-purple-600'
    },
    {
      step: '02',
      icon: '🤖',
      title: 'AI Processes the API Structure',
      desc: 'DevAssist analyzes the full API specification — understanding endpoints, authentication, parameters, and response schemas.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      step: '03',
      icon: '⚡',
      title: 'Integration Intelligence Delivered',
      desc: 'Developers receive structured, actionable guidance to integrate the API faster, more reliably, and with confidence.',
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  differentiators = [
    { icon: '🛡️', title: 'Secure by Design', desc: 'Documentation is processed within a controlled environment instead of being exposed to public AI systems.' },
    { icon: '🔍', title: 'Structured API Understanding', desc: 'Analyzes the entire API specification instead of isolated text snippets — full context, always.' },
    { icon: '👥', title: 'Built for Teams', desc: 'Provides consistent integration intelligence across all engineering teams in your organization.' },
    { icon: '🚀', title: 'Developer Experience First', desc: 'Reduces friction in API onboarding and dramatically accelerates development cycles.' },
  ];

  forDevelopers = [
    'Faster API onboarding',
    'Reduced time spent reading documentation',
    'Clearer understanding of endpoints and payloads',
    'Simplified integration workflows'
  ];

  forOrganizations = [
    'Secure processing of API documentation',
    'Reduced reliance on support teams',
    'Consistent integration patterns across engineering teams',
    'Improved developer experience for API consumers'
  ];

  whoIsItFor = [
    { icon: '🏦', title: 'Fintech Companies', desc: 'That provide APIs to external developers and need controlled, secure documentation environments.' },
    { icon: '🛠️', title: 'Developer Platforms', desc: 'Looking to dramatically improve their integration experience and reduce onboarding friction.' },
    { icon: '⚙️', title: 'Engineering Teams', desc: 'That frequently integrate third-party APIs and need consistent, reliable guidance.' },
    { icon: '📡', title: 'API Providers', desc: 'Who want faster developer adoption and fewer support requests disrupting their teams.' },
  ];

  testimonials = [
    { quote: 'DevAssist cut our API integration time from days to hours. The structured guidance is exactly what our team needed.', author: 'Senior Engineer', company: 'Fintech Platform' },
    { quote: 'Finally, an AI tool we can trust with our internal API documentation. The security-first approach is a game-changer.', author: 'CTO', company: 'Developer Tools Startup' },
    { quote: 'Our developer experience scores improved dramatically after adopting DevAssist for third-party API integrations.', author: 'Engineering Lead', company: 'Enterprise SaaS' },
  ];

  safeFormUrl: SafeResourceUrl;

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.safeFormUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://docs.google.com/forms/d/e/1FAIpQLSeUujRdKE9XyIA3pJ0jwC8T3nCQ-jq5Y2tI55lRLI3GZgb4vg/viewform?embedded=true'
    );
  }

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    if (this.carouselTimer) clearInterval(this.carouselTimer);
  }

  startCarousel(): void {
    this.carouselTimer = setInterval(() => {
      this.carouselIndex = (this.carouselIndex + 1) % this.testimonials.length;
    }, 4000);
  }

  setCarouselIndex(i: number): void {
    this.carouselIndex = i;
    if (this.carouselTimer) clearInterval(this.carouselTimer);
    this.startCarousel();
  }

  setActiveTab(i: number): void {
    this.activeTab = i;
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }

  scrollToForm(): void {
    const el = document.getElementById('devassist-form');
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }
}
