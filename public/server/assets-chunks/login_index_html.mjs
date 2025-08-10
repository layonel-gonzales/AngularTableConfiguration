export default `<!DOCTYPE html><html lang="es" data-beasties-container><head>
  <meta charset="utf-8">
  <title>Angular Table App</title>
  <base href="/AngularTableConfiguration/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Aplicación Angular con tabla configurable">
  <meta name="theme-color" content="#1976d2">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="manifest" href="manifest.json">
  <style>
    .loading {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid #f3f3f3;
      border-top: 3px solid #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
  </style>
<style>*{box-sizing:border-box}html{height:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body{margin:0;padding:0;min-height:100%;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#f5f7fa;overflow-x:hidden}h2,h4{margin:0;font-weight:500}button,input{font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}@media (max-width: 768px){body{font-size:14px}}@media screen and (-webkit-min-device-pixel-ratio:0){input[type=text],input[type=password]{font-size:16px}}
</style><link rel="stylesheet" href="styles-6DUK4UUP.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-6DUK4UUP.css"></noscript><style ng-app-id="ng">.login-container[_ngcontent-ng-c569983957]{display:flex;justify-content:center;align-items:center;min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);padding:20px}.login-card[_ngcontent-ng-c569983957]{background:#fff;padding:40px;border-radius:12px;box-shadow:0 15px 35px #0000001a;width:100%;max-width:400px}.login-card[_ngcontent-ng-c569983957]   h2[_ngcontent-ng-c569983957]{text-align:center;margin-bottom:30px;color:#333;font-size:28px;font-weight:300}.form-group[_ngcontent-ng-c569983957]{margin-bottom:20px}.form-group[_ngcontent-ng-c569983957]   label[_ngcontent-ng-c569983957]{display:block;margin-bottom:8px;color:#555;font-weight:500}.form-group[_ngcontent-ng-c569983957]   input[_ngcontent-ng-c569983957]{width:100%;padding:12px 16px;border:2px solid #e1e5e9;border-radius:8px;font-size:16px;transition:border-color .3s ease;box-sizing:border-box}.form-group[_ngcontent-ng-c569983957]   input[_ngcontent-ng-c569983957]:focus{outline:none;border-color:#667eea}.form-group[_ngcontent-ng-c569983957]   input.error[_ngcontent-ng-c569983957]{border-color:#e74c3c}.error-message[_ngcontent-ng-c569983957]{color:#e74c3c;font-size:14px;margin-top:5px}.general-error[_ngcontent-ng-c569983957]{text-align:center;margin:15px 0;padding:10px;background-color:#ffeaea;border-radius:6px}.login-btn[_ngcontent-ng-c569983957]{width:100%;padding:14px;background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;border-radius:8px;font-size:16px;font-weight:500;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease}.login-btn[_ngcontent-ng-c569983957]:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 8px 25px #667eea4d}.login-btn[_ngcontent-ng-c569983957]:disabled{opacity:.6;cursor:not-allowed;transform:none}.demo-credentials[_ngcontent-ng-c569983957]{margin-top:30px;padding:20px;background-color:#f8f9fa;border-radius:8px;border-left:4px solid #667eea}.demo-credentials[_ngcontent-ng-c569983957]   h4[_ngcontent-ng-c569983957]{margin:0 0 15px;color:#333;font-size:16px}.demo-credentials[_ngcontent-ng-c569983957]   ul[_ngcontent-ng-c569983957]{margin:0;padding-left:20px}.demo-credentials[_ngcontent-ng-c569983957]   li[_ngcontent-ng-c569983957]{margin-bottom:8px;color:#666}.demo-credentials[_ngcontent-ng-c569983957]   strong[_ngcontent-ng-c569983957]{color:#333;font-family:Courier New,monospace}@media (max-width: 480px){.login-container[_ngcontent-ng-c569983957]{padding:10px}.login-card[_ngcontent-ng-c569983957]{padding:30px 20px}.login-card[_ngcontent-ng-c569983957]   h2[_ngcontent-ng-c569983957]{font-size:24px}}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["submit","input","compositionstart","compositionend"],["blur"]);</script>
  <app-root ng-version="20.1.6" ngh="1" ng-server-context="ssg"><div style="min-height: 100vh;"><router-outlet></router-outlet><app-login _nghost-ng-c569983957 ngh="0"><div _ngcontent-ng-c569983957 class="login-container"><div _ngcontent-ng-c569983957 class="login-card"><h2 _ngcontent-ng-c569983957>Iniciar Sesión</h2><form _ngcontent-ng-c569983957 novalidate class="ng-untouched ng-pristine ng-invalid" jsaction="submit:;"><div _ngcontent-ng-c569983957 class="form-group"><label _ngcontent-ng-c569983957 for="username">Usuario</label><input _ngcontent-ng-c569983957 type="text" id="username" formcontrolname="username" placeholder="Ingrese su usuario" class="ng-untouched ng-pristine ng-invalid" value jsaction="input:;blur:;compositionstart:;compositionend:;"><!----></div><div _ngcontent-ng-c569983957 class="form-group"><label _ngcontent-ng-c569983957 for="password">Contraseña</label><input _ngcontent-ng-c569983957 type="password" id="password" formcontrolname="password" placeholder="Ingrese su contraseña" class="ng-untouched ng-pristine ng-invalid" value jsaction="input:;blur:;compositionstart:;compositionend:;"><!----></div><!----><button _ngcontent-ng-c569983957 type="submit" class="login-btn" disabled> Iniciar Sesión </button></form><div _ngcontent-ng-c569983957 class="demo-credentials"><h4 _ngcontent-ng-c569983957>Credenciales de demo:</h4><ul _ngcontent-ng-c569983957><li _ngcontent-ng-c569983957><strong _ngcontent-ng-c569983957>admin</strong> / admin123</li><li _ngcontent-ng-c569983957><strong _ngcontent-ng-c569983957>usuario1</strong> / pass123</li><li _ngcontent-ng-c569983957><strong _ngcontent-ng-c569983957>demo</strong> / demo123</li></ul></div></div></div></app-login><!----></div></app-root>
<link rel="modulepreload" href="chunk-ECQDBGNS.js"><script src="polyfills-B6TNHZQ6.js" type="module"></script><script src="main-YUP26LEX.js" type="module"></script>
<link rel="modulepreload" href="chunk-YBFTOMAG.js">
<link rel="modulepreload" href="chunk-5IBZ6EYV.js">


<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"9":"t0","14":"t1","15":"t2"},"c":{"9":[],"14":[],"15":[]}},{"c":{"1":[{"i":"c569983957","r":1}]}}]}</script></body></html>`;