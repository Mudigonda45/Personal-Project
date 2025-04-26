import { Component, AfterViewInit } from '@angular/core';
import particlesJS from 'particles.js'; 


@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    // Initialize particles.js with configuration
    particlesJS.load('particles-js', 'assets/particles.json', () => {
      console.log('Particles.js config loaded successfully');
    });
  }
}
