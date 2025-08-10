export default `<!doctype html>
<html lang="es">
<head>
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
<link rel="stylesheet" href="styles-6DUK4UUP.css"></head>
<body><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script>
  <app-root>
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <div style="text-align: center;">
        <div class="loading"></div>
        <p style="margin-top: 20px; color: #666;">Cargando aplicación...</p>
      </div>
    </div>
  </app-root>
<link rel="modulepreload" href="chunk-ECQDBGNS.js"><script src="polyfills-B6TNHZQ6.js" type="module"></script><script src="main-YUP26LEX.js" type="module"></script></body>
</html>
`;