
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
      "chunk-YBFTOMAG.js",
      "chunk-5IBZ6EYV.js"
    ],
    "route": "/AngularTableConfiguration/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4OOIDREP.js",
      "chunk-5IBZ6EYV.js"
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
    'index.csr.html': {size: 2252, hash: '011bd3454881e53a7d7d17a0a20a2a810edccecbde244115b2837c434ffae26c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1984, hash: '3ceac2bf443f55430f6960f30aeecf9cf28d126af87c1ce1ebdb6f616eab652d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 7248, hash: '346d6aa3c77a2cabafa67c3068164fcb4ea60db562bf5d23553de4162902d889', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 7248, hash: '9a6d239661c2909d4f3367b82bfcc80280f36b555cb949fae3b4aa32fb71c3fe', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-6DUK4UUP.css': {size: 1160, hash: 'v6sLbkzAhxE', text: () => import('./assets-chunks/styles-6DUK4UUP_css.mjs').then(m => m.default)}
  },
};
