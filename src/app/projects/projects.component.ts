import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  type: string;
  stack: string[];
  description: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubLabel?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Gradmint Technologies Internship Portal',
      type: 'Live Project',
      stack: ['Angular 20', 'TypeScript', 'EmailJS', 'GitHub Pages', 'GoDaddy DNS'],
      featured: true,
      liveUrl: 'https://gradminttechnologiespvtltd.com/',
      githubUrl: 'https://github.com/Mudigonda45?tab=repositories',
      githubLabel: 'GradmintTech Repository',
      description: [
        'Developed and deployed a fully responsive internship portal using Angular 20 with component-based architecture and modern UI/UX design.',
        'Built dynamic sections including internship programs, how it works, success stories, application form, header, footer, and smooth-scroll navigation.',
        'Implemented Angular Reactive Forms with validations and EmailJS integration for automated internship application notifications.',
        'Configured deployment using GitHub Pages and integrated a custom domain through GoDaddy DNS management.',
        'Optimized the website for desktop, tablet, and mobile devices using CSS Grid, Flexbox, and media queries.',
        'Implemented reusable Angular standalone components and client-side routing architecture.',
        'Designed the application to support future enhancements such as AI-powered chatbot integration and mentor management modules.'
      ]
    },
    {
      title: 'Car Rental Booking System',
      type: 'Full Stack Application',
      stack: ['Angular', 'Spring Boot', 'MySQL'],
      description: [
        'Developed a full-stack application for car rental booking with responsive UI.',
        'Built REST APIs using Spring Boot and integrated them with the Angular frontend.',
        'Implemented automated email notifications for booking confirmations.',
        'Designed scalable and modular architecture.'
      ]
    },
    {
      title: 'Quiz Management System',
      type: 'Backend Microservices',
      stack: ['Spring Boot', 'Microservices', 'MySQL', 'Eureka Server', 'API Gateway'],
      description: [
        'Developed a scalable backend system to manage quizzes, questions, and user responses using Spring Boot.',
        'Designed RESTful APIs for quiz creation, dynamic question retrieval, and automated score calculation.',
        'Implemented centralized exception handling using @RestControllerAdvice for consistent API responses.',
        'Built microservices architecture with Eureka Server for service discovery and registration.',
        'Integrated API Gateway for routing, load balancing, and unified access to services.',
        'Used Spring Data JPA and Hibernate with MySQL for efficient data persistence.',
        'Managed and monitored database operations using MySQL Workbench.',
        'Structured application using layered architecture with Controller, Service, and Repository layers.'
      ]
    },
    {
      title: 'College Website',
      type: 'Live Demo',
      stack: ['HTML', 'CSS', 'JavaScript'],
      description: [
        'Developed a responsive college website with structured UI/UX design.',
        'Created clean page sections and mobile-friendly layouts for a consistent browsing experience.'
      ]
    }
  ];
}
