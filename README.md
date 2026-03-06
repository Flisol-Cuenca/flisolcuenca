# FLISOL CUENCA
Sitio oficial del evento FLISOL Cuenca 2026.

## Stack

- **[Pelican](https://getpelican.com/)** — generador de sitios estáticos en Python
- **Jinja2** — motor de templates (incluido con Pelican)
- **GitHub Pages** — hosting del sitio generado

## Arquitectura y diseño del proyecto

```
theme/
├── templates/
│   ├── base.html              ← layout global: navbar y footer
│   ├── index.html             ← orquesta las secciones con {% include %}
│   └── sections/              ← una sección por archivo
│       ├── hero.html
│       ├── comunidades.html
│       ├── inscripciones.html
│       ├── agenda.html
│       ├── installfest.html
│       ├── sponsors.html
│       └── contacto.html
└── static/
    ├── css/
    │   └── style.css          ← estilos globales: variables, reset, navbar, botones, footer
    └── js/
        └── main.js
```

Cada archivo en `sections/` es autocontenido: incluye un bloque `<style>` con sus propios estilos
seguido del markup HTML de la sección. Para modificar una sección basta con editar ese único archivo.

## Dependencias

Declaradas en `requirements.txt`. Requiere **Python 3** instalado.

```bash
python3 -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

## Cómo ejecutar el proyecto

Activa el entorno virtual y levanta el servidor de desarrollo con recarga automática:

```bash
source venv/bin/activate        # Windows: venv\Scripts\activate
make devserver                  # disponible en http://localhost:8000
```

Para solo generar el HTML sin servidor:

```bash
make html
```
