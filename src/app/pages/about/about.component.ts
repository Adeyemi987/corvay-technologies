import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  values = [
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology'
    },
    {
      icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z',
      title: 'Trust',
      description: 'Building lasting relationships through reliability'
    },
    {
      icon: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Excellence',
      description: 'Delivering superior quality in everything we do'
    },
    {
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
      title: 'Sustainability',
      description: 'Committed to environmental responsibility'
    }
  ];
}
