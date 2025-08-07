import { bootstrapApplication } from '@angular/platform-browser';
import { appConfigGithub } from './app/app.config.github';
import { App } from './app/app';

// Simple error handling
window.addEventListener('error', (event) => {
  console.error('Error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Promise rejection:', event.reason);
});

console.log('Iniciando aplicación Angular...');

bootstrapApplication(App, appConfigGithub)
  .then(() => {
    console.log('✅ Aplicación iniciada correctamente');
  })
  .catch((err) => {
    console.error('❌ Error al iniciar aplicación:', err);
    
    // Mostrar error simple al usuario
    const appRoot = document.querySelector('app-root');
    if (appRoot) {
      appRoot.innerHTML = `
        <div style="padding: 40px; text-align: center; font-family: Arial, sans-serif; max-width: 500px; margin: 50px auto;">
          <h2 style="color: #e74c3c; margin-bottom: 20px;">⚠️ Error de carga</h2>
          <p style="color: #666; margin-bottom: 30px;">No se pudo cargar la aplicación. Esto puede deberse a problemas de red o compatibilidad del navegador.</p>
          <button onclick="window.location.reload()" 
                  style="padding: 12px 24px; background: #3498db; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; margin-right: 10px;">
            🔄 Reintentar
          </button>
          <a href="https://layonel-gonzales.github.io/AngularTableConfiguration/" 
             style="padding: 12px 24px; background: #2ecc71; color: white; text-decoration: none; border-radius: 6px; font-size: 16px;">
            🏠 Ir al inicio
          </a>
          <details style="margin-top: 20px; text-align: left;">
            <summary style="cursor: pointer; color: #666;">Ver detalles técnicos</summary>
            <pre style="background: #f8f9fa; padding: 10px; border-radius: 4px; overflow-x: auto; font-size: 12px;">${err.message || err}</pre>
          </details>
        </div>
      `;
    }
  });
