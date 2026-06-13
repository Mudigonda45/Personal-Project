import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Education {
  institution: string;
  degree: string;
  year: string;
  highlight: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  imports:[CommonModule]
})
export class EducationComponent {
  educationDetails: Education[] = [
    {
      institution: 'Sreenidhi Institute of Science and Technology',
      degree: 'B.Tech',
      year: '2020 - 2023',
      highlight: 'Information Technology'
    },
    {
      institution: 'TKR College of Engineering & Technology',
      degree: 'Diploma',
      year: '2017 - 2020',
      highlight: 'Computer Engineering'
    },
    {
      institution: 'St. Paul\'s Lutheran School',
      degree: '10th',
      year: '2016 - 2017',
      highlight: 'Secondary School Certificate'
    }
  ];
}
