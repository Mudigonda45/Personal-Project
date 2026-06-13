import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface SkillGroup {
  title: string;
  icon: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  percentage: number;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    {
      title: 'Languages',
      icon: 'fa-solid fa-code',
      skills: [
        { name: 'Java', percentage: 90 },
        { name: 'SQL', percentage: 82 },
        { name: 'JavaScript', percentage: 78 },
        { name: 'TypeScript', percentage: 84 }
      ]
    },
    {
      title: 'Backend',
      icon: 'fa-solid fa-server',
      skills: [
        { name: 'Spring Boot', percentage: 88 },
        { name: 'Spring Data JPA', percentage: 84 },
        { name: 'Hibernate', percentage: 82 }
      ]
    },
    {
      title: 'Frontend',
      icon: 'fa-solid fa-laptop-code',
      skills: [
        { name: 'Angular', percentage: 88 },
        { name: 'HTML', percentage: 90 },
        { name: 'CSS', percentage: 84 }
      ]
    },
    {
      title: 'Testing',
      icon: 'fa-solid fa-vial-circle-check',
      skills: [
        { name: 'JUnit', percentage: 82 },
        { name: 'Mockito', percentage: 80 },
        { name: 'Jasmine', percentage: 76 },
        { name: 'Cypress', percentage: 74 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: 'fa-solid fa-screwdriver-wrench',
      skills: [
        { name: 'Git', percentage: 88 },
        { name: 'Jenkins', percentage: 78 },
        { name: 'CI/CD', percentage: 80 },
        { name: 'SonarQube', percentage: 76 },
        { name: 'Insomnia', percentage: 82 }
      ]
    },
    {
      title: 'Architecture & Cloud',
      icon: 'fa-solid fa-cloud',
      skills: [
        { name: 'Microservices', percentage: 84 },
        { name: 'REST APIs', percentage: 90 },
        { name: 'AWS Basics', percentage: 72 },
        { name: 'Agile', percentage: 86 },
        { name: 'Scrum', percentage: 84 }
      ]
    }
  ];
}
