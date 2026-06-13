import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  imports:[CommonModule]
})
export class TimelineComponent {
  experiences: Experience[] = [
    {
      role: 'Full Stack Developer',
      company: 'Fidelity Investments',
      period: 'Sep 2024 - Sep 2025',
      points: [
        'Developed responsive UI components using Angular, enhancing user experience for enterprise applications.',
        'Built Angular components and integrated frontend with backend services.',
        'Designed and optimized MySQL databases using Spring Data JPA and Hibernate.',
        'Achieved 90% unit test coverage using JUnit and Mockito, verified by SonarQube.',
        'Implemented CI/CD pipelines using Jenkins, reducing deployment time by 30%.',
        'Worked in Agile Scrum teams and followed microservices architecture.'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'Freelancer',
      period: 'July 2023 - Oct 2024',
      location: 'Remote',
      points: [
        'Developed responsive and interactive frontend interfaces using HTML, CSS, and JavaScript for small business and portfolio websites.',
        'Collaborated with clients to gather requirements and translate ideas into visually appealing web pages.',
        'Implemented clean UI/UX designs with cross-browser compatibility and mobile responsiveness.',
        'Optimized website performance and usability, improving page load times and accessibility.'
      ]
    }
  ];
}
