# Manual técnico · Git & GitHub

Sitio estático basado en el manual PDF proporcionado. Está construido con HTML, CSS y JavaScript vanilla, sin dependencias ni proceso de compilación; es compatible con GitHub Pages.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo, `manual-git`).
2. Descomprime este proyecto y sube `index.html`, la carpeta `assets/` y este `README.md` a la raíz del repositorio.
3. Abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`. Guarda.
6. Espera a que termine el despliegue. GitHub mostrará la URL pública en esa misma sección.

La dirección normalmente será `https://TU-USUARIO.github.io/manual-git/`. Si el repositorio se llama `TU-USUARIO.github.io`, se publicará en la raíz del dominio.

## Estructura

```text
.
├── index.html
├── assets/
│   ├── styles.css
│   └── script.js
└── README.md
```

## Personalización

- Cambia el nombre del autor y los textos en `index.html`.
- Ajusta colores y tipografías en `assets/styles.css` (variables al inicio).
- Añade nuevos comandos duplicando una tarjeta `.command-card` o una fila de tabla.
- No requiere Node.js, npm ni GitHub Actions.

## Nota sobre los comandos

La página conserva los temas del documento original y normaliza algunos ejemplos para el uso actual: `main` como nombre de rama de ejemplo, `git config --global --list`, `git switch -c`, `git tag` ligero y `git push --force-with-lease`. Los comandos destructivos se señalan con advertencias.
