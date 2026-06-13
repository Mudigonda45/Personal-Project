import { Component, AfterViewInit } from '@angular/core';

declare const particlesJS: {
  load: (tagId: string, pathConfigJson: string, callback?: () => void) => void;
};

@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    if (typeof particlesJS === 'undefined') {
      return;
    }

    particlesJS.load('particles-js', 'assets/particles.json', () => {
      console.log('Particles.js config loaded successfully');
    });
  }
}
