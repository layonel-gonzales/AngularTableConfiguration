import { bootstrapApplication } from '@angular/platform-browser';
import { appConfigGithub } from './app/app.config.github';
import { App } from './app/app';

bootstrapApplication(App, appConfigGithub)
  .catch((err) => console.error(err));
