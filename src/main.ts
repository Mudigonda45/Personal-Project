import { enableProdMode, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module'; // Use named import for routes
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment.prod';

if (environment.production) {
  enableProdMode();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Provide routes here
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
