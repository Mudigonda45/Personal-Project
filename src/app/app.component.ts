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
import { ServicesComponent } from "./services/services.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    SkillsComponent,
    ProjectsComponent,
    TimelineComponent,
    NavbarComponent,
    ContactComponent,
    HomeComponent,
    AboutMeComponent,
    EducationComponent,
    ServicesComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-website';
}
