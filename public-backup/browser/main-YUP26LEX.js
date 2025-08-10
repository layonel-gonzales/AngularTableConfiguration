import{G as a,H as p,I as c,U as l,ba as s,ca as d,ea as g,fa as u,y as i}from"./chunk-ECQDBGNS.js";var m=[{path:"",redirectTo:"/login",pathMatch:"full"},{path:"login",loadComponent:()=>import("./chunk-YBFTOMAG.js").then(o=>o.LoginComponent)},{path:"dashboard",loadComponent:()=>import("./chunk-4OOIDREP.js").then(o=>o.DashboardComponent)},{path:"**",redirectTo:"/login"}];var t={providers:[l({eventCoalescing:!0}),g(m,u())]};var r=class o{title="angular-table-app";constructor(){console.log("\u{1F680} App component loaded!")}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=i({type:o,selectors:[["app-root"]],decls:2,vars:0,consts:[[2,"min-height","100vh"]],template:function(n,f){n&1&&(a(0,"div",0),c(1,"router-outlet"),p())},dependencies:[d],encapsulation:2})};console.log("\u{1F680} Iniciando aplicaci\xF3n Angular para GitHub Pages...");console.log("\u{1F4CD} URL actual:",window.location.href);console.log("\u{1F310} User Agent:",navigator.userAgent);console.log("\u2705 App component:",typeof r);console.log("\u2705 Config:",typeof t);window.addEventListener("error",o=>{console.error("\u274C Error global:",o.error),console.error("\u{1F4C1} Archivo:",o.filename),console.error("\u{1F4CD} L\xEDnea:",o.lineno)});window.addEventListener("unhandledrejection",o=>{console.error("\u274C Promise rechazada:",o.reason),o.preventDefault()});try{console.log("\u{1F504} Intentando bootstrapApplication..."),s(r,t).then(()=>{console.log("\u2705 \xA1Aplicaci\xF3n iniciada exitosamente!"),setTimeout(()=>{let o=document.querySelector("router-outlet");console.log("\u{1F3AF} Router outlet encontrado:",!!o);let e=document.querySelector("app-root");console.log("\u{1F3E0} App root content:",e?.innerHTML?.length||0,"caracteres")},1e3)}).catch(o=>{console.error("\u274C Error cr\xEDtico al iniciar aplicaci\xF3n:",o),console.error("\u{1F4CA} Stack trace:",o.stack);let e=document.querySelector("app-root");e&&(e.innerHTML=`
          <div style="padding: 20px; max-width: 600px; margin: 50px auto; font-family: Arial, sans-serif; background: #fff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #e74c3c; margin-bottom: 20px;">\u26A0\uFE0F Error de Inicializaci\xF3n</h2>
            <p style="color: #666; margin-bottom: 15px;"><strong>No se pudo iniciar la aplicaci\xF3n Angular.</strong></p>
            
            <details style="margin: 15px 0;">
              <summary style="cursor: pointer; padding: 10px; background: #f8f9fa; border-radius: 4px;">Ver error t\xE9cnico</summary>
              <pre style="background: #f1f1f1; padding: 15px; margin-top: 10px; border-radius: 4px; overflow-x: auto; font-size: 12px; white-space: pre-wrap;">${o.message||o}</pre>
            </details>
            
            <div style="margin-top: 20px;">
              <button onclick="window.location.reload()" 
                      style="padding: 12px 20px; background: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;">
                \u{1F504} Recargar p\xE1gina
              </button>
              
              <button onclick="console.clear(); window.location.reload()" 
                      style="padding: 12px 20px; background: #9b59b6; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;">
                \u{1F9F9} Limpiar y recargar
              </button>
              
              <a href="https://github.com/layonel-gonzales/AngularTableConfiguration" target="_blank"
                 style="padding: 12px 20px; background: #2ecc71; color: white; text-decoration: none; border-radius: 4px; display: inline-block;">
                \u{1F4F1} Ver c\xF3digo fuente
              </a>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #e8f4f8; border-radius: 4px; font-size: 14px;">
              <strong>\u{1F4A1} Posibles soluciones:</strong>
              <ul style="margin: 10px 0; padding-left: 20px;">
                <li>Probar en modo inc\xF3gnito</li>
                <li>Limpiar cach\xE9 del navegador</li>
                <li>Usar un navegador diferente</li>
                <li>Verificar conexi\xF3n a internet</li>
              </ul>
            </div>
          </div>
        `)})}catch(o){console.error("\u274C Error s\xEDncrono:",o)}
