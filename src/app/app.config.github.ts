import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';

export const appConfigGithub: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Usar hash routing para GitHub Pages para evitar problemas de routing
    provideRouter(routes, withHashLocation())
  ]
};
