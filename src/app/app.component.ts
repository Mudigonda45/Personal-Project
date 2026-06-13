import { Component } from '@angular/core';
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { FooterComponent } from "./footer/footer.component";
import { EducationComponent } from "./education/education.component";

import { TimelineComponent } from "./timeline/timeline.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, CalendarModule, FooterComponent, SkillsComponent, ProjectsComponent, TimelineComponent, NavbarComponent, ContactComponent, HomeComponent, AboutMeComponent, EducationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-website';    
  selectedDate: Date | null = null;
  dateFormat: string = 'dd/mm/yy';     
  
  onRefresh() {
  this.selectedDate = null; // Clear selected date
}
}
