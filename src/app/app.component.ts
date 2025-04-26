import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { HeaderComponent } from "./header/header.component";
import { EducationComponent } from "./education/education.component";
import { FooterComponent } from "./footer/footer.component";

import { TimelineComponent } from "./timeline/timeline.component";
import { HeroComponent } from "./hero/hero.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, SkillsComponent, ProjectsComponent, TimelineComponent, NavbarComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-website';                                                                                            
}
