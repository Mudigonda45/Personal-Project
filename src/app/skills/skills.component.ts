import { CommonModule } from '@angular/common';
import { Component ,AfterViewInit} from '@angular/core';

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
export class SkillsComponent implements AfterViewInit  {
  skills = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 80 },
    { name: 'JavaScript', percentage: 70 },
    // Add more skills as needed
];

ngAfterViewInit() {
    // Trigger animations after view initialization
    setTimeout(() => {
        const skillBars = document.querySelectorAll('.skill-percentage');
        skillBars.forEach((bar) => {
            bar.classList.add('flowing'); // Add the flowing class to trigger animation
        });
    }, 100); // Delay slightly to ensure elements are rendered
}
}
