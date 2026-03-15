import { Component, OnInit } from '@angular/core';

// Global type declaration for the DevAssistAI widget function
declare global {
  interface Window {
    mountChainlitWidget: (config: {
      chainlitServer: string;
      accessToken: string;
      display: string;
      button?: { label: string; imageUrl?: string };
    }) => void;
  }
}

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [],
  template: '', // DevAssistAI widget script renders its own button UI
})
export class ChatWidgetComponent implements OnInit {
  private readonly widgetUrl = 'https://devassist-widget.onrender.com';
  private readonly serviceId = 'b1e5e2b2-60e9-4c37-90fb-dde2cb5b8700';

  ngOnInit(): void {
    this.loadDevAssistWidget();
  }

  private loadDevAssistWidget(): void {
    const script = document.createElement('script');
    script.src = `${this.widgetUrl}/copilot/index.js`;
    script.onload = () => this.initWidget();
    script.onerror = (err) => console.error('DevAssistAI script failed to load:', err);
    document.head.appendChild(script);
  }

  private async initWidget(): Promise<void> {
    try {
      const res = await fetch(
        `${this.widgetUrl}/custom/guest-token?service_id=${this.serviceId}`
      );
      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      window.mountChainlitWidget({
        chainlitServer: this.widgetUrl,
        accessToken: data.token,
        display: 'button',
        button: {
          label: 'Ask devAssist AI',
          imageUrl: 'https://img.icons8.com/fluency/48/artificial-intelligence.png',
        },
      });
    } catch (err) {
      console.error('devAssist init failed:', err);
    }
  }
}
