import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Project {
  title: string;
  gifUrl: string;
  link: string;
}
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    { title: 'Project 1', gifUrl: 'assets/ezgif.com-gif-maker.gif', link: 'https://mudigonda45.github.io/MohanSaiMudigonda/' },
    { title: 'Project 2', gifUrl: 'assets/ezgif.com-gif-maker.gif', link: 'https://mudigonda45.github.io/MohanSaiMudigonda/' },
    { title: 'Project 3', gifUrl: 'assets/ezgif.com-gif-maker.gif', link: 'https://mudigonda45.github.io/MohanSaiMudigonda/' },
    { title: 'Project 4', gifUrl: 'assets/ezgif.com-gif-maker.gif', link: 'https://mudigonda45.github.io/MohanSaiMudigonda/' },
    
  ];
}
