import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      title: 'Web Application Development',
      description: 'Building modern, responsive Angular applications with clean architecture and performance optimization.',
      icon: 'fa-solid fa-code'
    },
    {
      title: 'API & Microservices',
      description: 'Designing scalable REST APIs and microservices with Java Spring Boot for secure backend systems.',
      icon: 'fa-solid fa-server'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Deploying applications to cloud platforms with CI/CD automation, containerization, and infrastructure as code.',
      icon: 'fa-solid fa-cloud-arrow-up'
    },
    {
      title: 'UI/UX & Frontend Design',
      description: 'Creating intuitive user interfaces with pixel-perfect design, accessibility, and responsive behavior.',
      icon: 'fa-solid fa-palette'
    }
  ];
}
