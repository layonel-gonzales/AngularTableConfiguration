import { bootstrapApplication } from '@angular/platform-browser';
import { appConfigGithub } from './app/app.config.github';
import { App } from './app/app';

// Debug logs para identificar el problema
console.log('🚀 Iniciando aplicación Angular para GitHub Pages...');
console.log('📍 URL actual:', window.location.href);
console.log('🌐 User Agent:', navigator.userAgent);

// Verificar que los imports están disponibles
console.log('✅ App component:', typeof App);
console.log('✅ Config:', typeof appConfigGithub);

// Error handling global
window.addEventListener('error', (event) => {
  console.error('❌ Error global:', event.error);
  console.error('📁 Archivo:', event.filename);
  console.error('📍 Línea:', event.lineno);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('❌ Promise rechazada:', event.reason);
  event.preventDefault(); // Evitar que se propague
});

try {
  console.log('🔄 Intentando bootstrapApplication...');
  
  bootstrapApplication(App, appConfigGithub)
    .then(() => {
      console.log('✅ ¡Aplicación iniciada exitosamente!');
      
      // Verificar que el router está funcionando
      setTimeout(() => {
        const outlet = document.querySelector('router-outlet');
        console.log('🎯 Router outlet encontrado:', !!outlet);
        
        const appRoot = document.querySelector('app-root');
        console.log('🏠 App root content:', appRoot?.innerHTML?.length || 0, 'caracteres');
      }, 1000);
    })
    .catch((err) => {
      console.error('❌ Error crítico al iniciar aplicación:', err);
      console.error('📊 Stack trace:', err.stack);
      
      // Mostrar error detallado al usuario
      const appRoot = document.querySelector('app-root');
      if (appRoot) {
        appRoot.innerHTML = `
          <div style="padding: 20px; max-width: 600px; margin: 50px auto; font-family: Arial, sans-serif; background: #fff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #e74c3c; margin-bottom: 20px;">⚠️ Error de Inicialización</h2>
            <p style="color: #666; margin-bottom: 15px;"><strong>No se pudo iniciar la aplicación Angular.</strong></p>
            
            <details style="margin: 15px 0;">
              <summary style="cursor: pointer; padding: 10px; background: #f8f9fa; border-radius: 4px;">Ver error técnico</summary>
              <pre style="background: #f1f1f1; padding: 15px; margin-top: 10px; border-radius: 4px; overflow-x: auto; font-size: 12px; white-space: pre-wrap;">${err.message || err}</pre>
            </details>
            
            <div style="margin-top: 20px;">
              <button onclick="window.location.reload()" 
                      style="padding: 12px 20px; background: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;">
                🔄 Recargar página
              </button>
              
              <button onclick="console.clear(); window.location.reload()" 
                      style="padding: 12px 20px; background: #9b59b6; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;">
                🧹 Limpiar y recargar
              </button>
              
              <a href="https://github.com/layonel-gonzales/AngularTableConfiguration" target="_blank"
                 style="padding: 12px 20px; background: #2ecc71; color: white; text-decoration: none; border-radius: 4px; display: inline-block;">
                📱 Ver código fuente
              </a>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #e8f4f8; border-radius: 4px; font-size: 14px;">
              <strong>💡 Posibles soluciones:</strong>
              <ul style="margin: 10px 0; padding-left: 20px;">
                <li>Probar en modo incógnito</li>
                <li>Limpiar caché del navegador</li>
                <li>Usar un navegador diferente</li>
                <li>Verificar conexión a internet</li>
              </ul>
            </div>
          </div>
        `;
      }
    });

} catch (syncError) {
  console.error('❌ Error síncrono:', syncError);
}
