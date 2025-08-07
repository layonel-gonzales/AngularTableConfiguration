# Angular Table App

Esta es una aplicación Angular que demuestra una implementación de inicio de sesión y una tabla configurable con persistencia de configuración en cookies.

## Características

- **Página de Inicio de Sesión**: Autenticación simple con credenciales predefinidas
- **Dashboard con Tabla**: Lista de empleados con 6 columnas configurables
- **Configuración de Columnas**: Los usuarios pueden mostrar/ocultar columnas según sus preferencias
- **Persistencia**: La configuración de columnas se guarda en cookies del navegador
- **Diseño Responsivo**: Interfaz adaptable a diferentes tamaños de pantalla

## Credenciales de Demo

Para probar la aplicación, puedes usar cualquiera de estas credenciales:

- **Usuario**: `admin` | **Contraseña**: `admin123`
- **Usuario**: `usuario1` | **Contraseña**: `pass123`
- **Usuario**: `demo` | **Contraseña**: `demo123`

## Servidor de Desarrollo

Para iniciar el servidor de desarrollo local, ejecuta:

```bash
ng serve
```
Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias algún archivo fuente.

### Despliegue en GitHub Pages
```bash
npm run build:github
```
Para preparar la aplicación para GitHub Pages. Ver [GITHUB_PAGES.md](./GITHUB_PAGES.md) para instrucciones completas.
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
