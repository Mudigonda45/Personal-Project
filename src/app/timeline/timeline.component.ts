import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  imports:[CommonModule]
})
export class TimelineComponent {
  faCheck = faCheck;

  education = [
    {
      degree: 'BTECH',
      institute: 'IT, Sreenidhi Institute of Science and Technology',
      years: '2020-2023',
      completed: true
    },
    {
      degree: 'Diploma',
      institute: 'CME, TKR College of Engineering & Technology',
      years: '2017-2020',
      completed: true
    },
    {
      degree: '10th',
      institute: 'SSC, St. Paul\'s Lutheran, Bhadrachalam',
      years: '2016-2017',
      completed: true
    }
  ];
 
}

 
  


