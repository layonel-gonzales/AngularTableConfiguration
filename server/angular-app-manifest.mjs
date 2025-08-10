
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/AngularTableConfiguration/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/AngularTableConfiguration/login",
    "route": "/AngularTableConfiguration"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NYZUF7GX.js",
      "chunk-GO7336BY.js"
    ],
    "route": "/AngularTableConfiguration/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JNHOGQ5H.js",
      "chunk-GO7336BY.js"
    ],
    "route": "/AngularTableConfiguration/dashboard"
  },
  {
    "renderMode": 2,
    "redirectTo": "/AngularTableConfiguration/login",
    "route": "/AngularTableConfiguration/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3505, hash: 'c02f24b3e10da18b9250b8e4bc116eb2f56f7fb843286b009de77ba353833b22', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1984, hash: '9c3e90f0438b0b2676f5563ce495a783d065873af48c964afcb00b798dcccc86', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 8976, hash: 'ceb899ed1a32ef12e49614a5a48e1ee863d9cc6310431f5c19f3e74ecaae175b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 8976, hash: '137e1f9a197c9c86f1bb09a376226e490196b1830bcf6aa5c9660f4c42dd298d', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-VVJZJKXC.css': {size: 2479, hash: '9FR3kyJs/SE', text: () => import('./assets-chunks/styles-VVJZJKXC_css.mjs').then(m => m.default)}
  },
};
