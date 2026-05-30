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

## Requisitos previos

Antes de empezar, asegúrate de tener instalado lo siguiente:

- **Python 3.10+**
- **Git**
- `pip` para instalar dependencias de Python
- `make` para usar los comandos definidos en el `Makefile`

## Instalación

1. Haz un fork del repositorio y clona tu copia local:

```bash
git clone https://github.com/<tu-usuario>/flisolcuenca.git
cd flisolcuenca
```

2. Crea y activa un entorno virtual:

```bash
python3 -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
```

3. Instala las dependencias declaradas en `requirements.txt`:

```bash
pip install -r requirements.txt
```

## Cómo ejecutar el proyecto localmente

Con el entorno virtual activado, genera el sitio y levanta el servidor de desarrollo con recarga automática:

```bash
source venv/bin/activate        # Windows: venv\Scripts\activate
make devserver                  # disponible en http://localhost:8000
```

Si solo necesitas generar el HTML estático sin iniciar el servidor local:

```bash
make html
```

## Build y despliegue

Para generar la versión de producción del sitio usa:

```bash
make publish
```

Además, el repositorio incluye el workflow `.github/workflows/deploy.yml`, que construye el sitio con `publishconf.py` y lo despliega automáticamente a **GitHub Pages** en cada push a la rama `main`.

hall of fame for volunteers was included
