import { bootstrapApplication } from '@angular/platform-browser';
import { appConfigGithub } from './app/app.config.github';
import { App } from './app/app';

// Debug information for mobile
console.log('Location:', window.location.href);
console.log('User Agent:', navigator.userAgent);
console.log('Screen size:', window.screen.width + 'x' + window.screen.height);

// Error handling for mobile debugging
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  console.error('Error stack:', event.error?.stack);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Prevent infinite reloads
let reloadCount = parseInt(sessionStorage.getItem('reloadCount') || '0');
if (reloadCount > 3) {
  console.error('Too many reloads detected, stopping...');
  const errorDiv = document.createElement('div');
  errorDiv.innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif; background: #f8f9fa; margin: 20px; border-radius: 8px;">
      <h2 style="color: #e74c3c;">Error de carga detectado</h2>
      <p>La aplicación ha intentado cargar demasiadas veces.</p>
      <button onclick="sessionStorage.removeItem('reloadCount'); window.location.reload()" 
              style="padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer; margin: 5px;">
        Intentar de nuevo
      </button>
      <button onclick="window.location.href='/AngularTableConfiguration/'" 
              style="padding: 10px 20px; background: #2ecc71; color: white; border: none; border-radius: 4px; cursor: pointer; margin: 5px;">
        Ir al inicio
      </button>
    </div>
  `;
  document.body.appendChild(errorDiv);
} else {
  sessionStorage.setItem('reloadCount', String(reloadCount + 1));
  
  // Log initialization
  console.log('Starting Angular application for GitHub Pages...');

  bootstrapApplication(App, appConfigGithub)
    .then(() => {
      console.log('Angular application started successfully');
      // Clear reload count on successful start
      sessionStorage.removeItem('reloadCount');
    })
    .catch((err) => {
      console.error('Failed to start Angular application:', err);
      // Show error message to user
      const errorDiv = document.createElement('div');
      errorDiv.innerHTML = `
        <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif; background: #f8f9fa; margin: 20px; border-radius: 8px;">
          <h2 style="color: #e74c3c;">Error al cargar la aplicación</h2>
          <p>Error: ${err.message || 'Error desconocido'}</p>
          <button onclick="sessionStorage.removeItem('reloadCount'); window.location.reload()" 
                  style="padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Recargar
          </button>
        </div>
      `;
      document.body.appendChild(errorDiv);
    });
}
