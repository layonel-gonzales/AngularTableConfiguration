import { bootstrapApplication } from '@angular/platform-browser';
import { appConfigGithub } from './app/app.config.github';
import { App } from './app/app';

// Error handling for mobile debugging
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Log initialization
console.log('Starting Angular application for GitHub Pages...');

bootstrapApplication(App, appConfigGithub)
  .then(() => {
    console.log('Angular application started successfully');
  })
  .catch((err) => {
    console.error('Failed to start Angular application:', err);
    // Show error message to user
    const errorDiv = document.createElement('div');
    errorDiv.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
        <h2 style="color: #e74c3c;">Error al cargar la aplicación</h2>
        <p>Por favor, recarga la página.</p>
        <button onclick="window.location.reload()" style="padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Recargar
        </button>
      </div>
    `;
    document.body.appendChild(errorDiv);
  });
