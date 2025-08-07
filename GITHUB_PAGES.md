# Despliegue en GitHub Pages

## 🚀 Instrucciones para desplegar en GitHub Pages

### Preparación del proyecto para GitHub Pages

Tu proyecto ya está configurado para funcionar en GitHub Pages. Aquí están los pasos:

### 1. **Subir a GitHub**

```bash
# Inicializar repositorio (si no existe)
git init

# Agregar archivos
git add .

# Hacer commit
git commit -m "Initial commit - Angular Table App for GitHub Pages"

# Conectar con repositorio remoto
git remote add origin https://github.com/TU_USUARIO/angularTable.git

# Subir a GitHub
git push -u origin main
```

### 2. **Configurar GitHub Pages**

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** → **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. El workflow se ejecutará automáticamente

### 3. **Build Manual (Alternativo)**

Si prefieres hacer el build manual:

```bash
# Instalar dependencias
npm install

# Build para GitHub Pages
npm run build:github

# Los archivos estarán en dist/angular-table-app/browser/
```

### 4. **Estructura de Archivos Agregados**

✅ **Archivos creados para GitHub Pages:**

- `.github/workflows/deploy.yml` - GitHub Action para despliegue automático
- `public/404.html` - Manejo de rutas SPA
- `src/main.github.ts` - Entry point sin SSR
- `src/app/app.config.github.ts` - Configuración sin hidratación
- `build-github.bat` - Script de build alternativo

### 5. **Configuraciones Modificadas**

✅ **Archivos modificados:**

- `angular.json` - Nueva configuración "github"
- `package.json` - Script `build:github`
- `src/index.html` - Soporte para rutas SPA en GitHub Pages

### 6. **Características que Funcionarán**

✅ **Funciona en GitHub Pages:**
- ✅ Login con autenticación
- ✅ Navegación entre páginas
- ✅ Tabla configurable
- ✅ Configuración por usuario en cookies
- ✅ Persistencia de datos locales
- ✅ Diseño responsivo

### 7. **URL Final**

Tu aplicación estará disponible en:
```
https://TU_USUARIO.github.io/angularTable/
```

### 8. **Comandos Útiles**

```bash
# Desarrollo local
npm start

# Build para GitHub Pages
npm run build:github

# Build normal (con SSR)
npm run build

# Tests
npm test
```

### 9. **Verificación Local**

Para probar la versión de GitHub Pages localmente:

```bash
# Después de npm run build:github
cd dist/angular-table-app/browser
npx http-server -p 8080
```

### 10. **Solución de Problemas**

**Problema:** Rutas no funcionan
**Solución:** GitHub Pages automáticamente redirige 404 a index.html

**Problema:** Base href incorrecta
**Solución:** Verificar que el repositorio se llame "angularTable"

**Problema:** CSS/JS no cargan
**Solución:** Verificar base-href en angular.json

### 11. **Diferencias vs Versión SSR**

| Característica | Versión Local (SSR) | GitHub Pages (SPA) |
|---|---|---|
| Renderizado inicial | Servidor | Cliente |
| SEO | Mejor | Básico |
| Tiempo de carga | Más rápido | Estándar |
| Funcionalidad | Completa | Completa |

---

## ✨ Tu aplicación está lista para GitHub Pages!

Todos los archivos están configurados correctamente. Solo necesitas:
1. Subir a GitHub
2. Habilitar GitHub Pages
3. ¡Tu app estará live! 🚀
