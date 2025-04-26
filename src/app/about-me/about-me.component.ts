import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Brand icons
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'; // Solid icon

declare var particlesJS: any; // Declare particles.js

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements AfterViewInit {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faCameraRetro = faCameraRetro; // Photography icon
  path = "assets/passphoto.jpg";

  ngAfterViewInit() {
    particlesJS.load('particles-js', 'assets/particles.json', null);
  }
}
