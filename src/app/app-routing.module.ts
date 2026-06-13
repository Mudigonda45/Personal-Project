import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ContactComponent } from './contact/contact.component';
import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'about-me', component: AboutMeComponent },

  { path: 'skills', component: SkillsComponent },

  { path: 'projects', component: ProjectsComponent },

  { path: 'experience', component: TimelineComponent },

  { path: 'contact', component: ContactComponent },

  { path: '**', redirectTo: '' }
];