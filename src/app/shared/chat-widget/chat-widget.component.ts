import { Component, signal, computed, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  id: number;
  role: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

// ─────────────────────────────────────────────────────────────────
// DEMO RESPONSE ENGINE
// When you onboard to DevAssistAI, replace the getDemoResponse()
// method below with the embedded script from your DevAssist app.
// The script tag will look like:
//   <script src="https://app.devassistai.com/widget.js"
//           data-key="YOUR_API_KEY"
//           data-theme="dark">
//   </script>
// ─────────────────────────────────────────────────────────────────
const DEMO_RESPONSES: { keywords: string[]; response: string }[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'start', 'help', 'what can'],
    response:
      "Hello! 👋 I'm the **DevAssistAI** demo assistant.\n\nI can answer questions about:\n• Our products (DevAssistAI, SaaS-Connect, EcoLytix)\n• How DevAssistAI works\n• Pricing & plans\n• Getting in touch\n\nWhat would you like to know?",
  },
  {
    keywords: ['devassist', 'dev assist', 'documentation', 'docs', 'how does it work', 'how it works'],
    response:
      "**DevAssistAI** is Corvay's flagship product — an AI assistant that feeds directly on your technical documentation.\n\nHow it works:\n1. You upload or connect your docs, APIs & wikis\n2. DevAssistAI indexes and learns from them\n3. Embed a single script into your app\n4. Your users get instant, accurate doc-powered answers 24/7\n\nIt reduces support load significantly and keeps dev teams unblocked.",
  },
  {
    keywords: ['embed', 'integrate', 'script', 'install', 'add to', 'setup'],
    response:
      "Embedding DevAssistAI takes a single line:\n\n```html\n<script\n  src=\"https://app.devassistai.com/widget.js\"\n  data-key=\"YOUR_API_KEY\"\n  data-theme=\"dark\">\n</script>\n```\n\nNo backend work needed. Point it at your docs and you're live within minutes.",
  },
  {
    keywords: ['products', 'services', 'offer', 'build', 'portfolio', 'saas'],
    response:
      "Corvay Technologies builds intelligent SaaS solutions for enterprise teams:\n\n1. **DevAssistAI** — Documentation-fed AI assistant for dev & support teams\n2. **SaaS-Connect** — Workflow integration hub for SaaS tools\n3. **EcoLytix** — Sustainability & ESG analytics platform\n\nAll products are enterprise-ready and highly configurable.",
  },
  {
    keywords: ['price', 'pricing', 'cost', 'plan', 'subscription', 'tier', 'free'],
    response:
      "Our pricing scales with your team:\n\n• **Sandbox** — Free, explore the platform\n• **Growth** — For startups and small teams\n• **Enterprise** — Custom SLAs, SSO, dedicated support\n\nFor a tailored quote, email us at info@corvaytechnologies.com or visit the Contact page.",
  },
  {
    keywords: ['contact', 'email', 'reach', 'talk', 'demo', 'schedule', 'meeting'],
    response:
      "We'd love to connect! 🤝\n\n📧 info@corvaytechnologies.com\n\nOr head to our **Contact page** to schedule a live product demo — we'll walk you through DevAssistAI with your own documentation.",
  },
  {
    keywords: ['ecolytix', 'sustainability', 'esg', 'green', 'carbon', 'environment'],
    response:
      "**EcoLytix** is Corvay's sustainability analytics platform.\n\nIt helps enterprises:\n• Track carbon footprint & ESG metrics\n• Generate compliance-ready reports\n• Set and monitor sustainability KPIs\n\nLive at: sustainability-plat.onrender.com",
  },
  {
    keywords: ['saas-connect', 'saasconnect', 'connect', 'integration', 'workflow', 'automate'],
    response:
      "**SaaS-Connect** bridges your existing SaaS tools.\n\nIt enables seamless data flow and automation between platforms without custom code — perfect for operations teams managing multiple tools.\n\nLive at: saas-connect.onrender.com",
  },
  {
    keywords: ['corvay', 'company', 'about', 'who are', 'team', 'founded'],
    response:
      "**Corvay Technologies** builds intelligent SaaS infrastructure for modern enterprises.\n\nOur mission is to reduce operational friction through AI-powered tooling — from developer documentation assistants to sustainability reporting platforms.\n\nLearn more on our About page.",
  },
];

const FALLBACK_RESPONSES = [
  "Great question! For the most accurate details, I'd recommend reaching out to our team at info@corvaytechnologies.com — or ask me about our products, pricing, or how DevAssistAI works.",
  "I'm a demo version of DevAssistAI. In production, I'd have access to your company's full documentation to answer that precisely. Want to learn how that works?",
  "That's outside my demo knowledge base! Try asking about DevAssistAI, our products, pricing, or how to get in touch.",
];

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-widget.component.html',
  styleUrl: './chat-widget.component.css',
})
export class ChatWidgetComponent implements AfterViewChecked {
  @ViewChild('messagesContainer') messagesContainer!: ElementRef;

  isOpen = signal(false);
  isTyping = signal(false);
  userInput = signal('');
  messages = signal<ChatMessage[]>([
    {
      id: 0,
      role: 'assistant',
      text: "Hi there! 👋 I'm **DevAssistAI** — Corvay's documentation-powered assistant.\n\nAsk me anything about our products, services, or how DevAssistAI can work for your team.",
      timestamp: new Date(),
    },
  ]);

  private msgCounter = 1;
  private fallbackIndex = 0;
  private shouldScroll = false;

  toggleChat() {
    this.isOpen.update((v) => !v);
  }

  onInputChange(value: string) {
    this.userInput.set(value);
  }

  async sendMessage() {
    const text = this.userInput().trim();
    if (!text || this.isTyping()) return;

    // Add user message
    this.messages.update((msgs) => [
      ...msgs,
      { id: this.msgCounter++, role: 'user', text, timestamp: new Date() },
    ]);
    this.userInput.set('');
    this.shouldScroll = true;

    // Simulate typing delay
    this.isTyping.set(true);
    const delay = 800 + Math.random() * 600;
    await new Promise((r) => setTimeout(r, delay));

    // Add assistant response
    this.messages.update((msgs) => [
      ...msgs,
      {
        id: this.msgCounter++,
        role: 'assistant',
        text: this.getDemoResponse(text),
        timestamp: new Date(),
      },
    ]);
    this.isTyping.set(false);
    this.shouldScroll = true;
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  ngAfterViewChecked() {
    if (this.shouldScroll) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }

  private scrollToBottom() {
    try {
      const el = this.messagesContainer?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    } catch {}
  }

  /** Converts lightweight markdown (bold, code blocks, bullet lists) to HTML */
  formatMessage(text: string): string {
    return text
      .replace(/```[\w]*\n?([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n•/g, '\n<span class="bullet">•</span>')
      .replace(/\n(\d+)\./g, '\n<span class="num">$1.</span>')
      .replace(/\n/g, '<br>');
  }

  // ─────────────────────────────────────────────────────────────────────────
  // DEMO RESPONSE ENGINE — replace this entire method with your DevAssist
  // script integration when you onboard to the live platform.
  // ─────────────────────────────────────────────────────────────────────────
  private getDemoResponse(input: string): string {
    const lower = input.toLowerCase();

    for (const entry of DEMO_RESPONSES) {
      if (entry.keywords.some((kw) => lower.includes(kw))) {
        return entry.response;
      }
    }

    // Rotate fallback responses
    const resp = FALLBACK_RESPONSES[this.fallbackIndex % FALLBACK_RESPONSES.length];
    this.fallbackIndex++;
    return resp;
  }
}
