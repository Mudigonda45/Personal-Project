import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Education {
  institution: string;
  degree: string;
  year: string;
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
    { institution: 'St. Paul\'s School', degree: 'Secondary Certificate (SCC)', year: '2015' },
    { institution: 'TKR College', degree: 'Diploma', year: '2018' },
    { institution: 'SINST College', degree: 'B.Tech', year: '2021' }
  ];
}
