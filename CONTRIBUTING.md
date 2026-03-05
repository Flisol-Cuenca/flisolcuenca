# Contribuir a FLISOL Cuenca 2026

¡Gracias por tu interés en contribuir al sitio web del FLISOL Cuenca 2026! Este proyecto es de código abierto y todas las contribuciones son bienvenidas.

## Requisitos previos

- Python 3.10+
- Git

## Configuración del entorno

1. Haz un fork del repositorio y clónalo:

```bash
git clone https://github.com/<tu-usuario>/flisolcuenca.git
cd flisolcuenca
```

2. Crea y activa un entorno virtual:

```bash
python3 -m venv pelic
source pelic/bin/activate
```

3. Instala las dependencias:

```bash
pip install -r requirements.txt
```

4. Genera el sitio y levanta el servidor local:

```bash
make html
cd output && python3 -m http.server 8000
```

5. Abre `http://localhost:8000` en tu navegador.

## Estructura del proyecto

```
flisolcuenca/
├── content/              # Contenido Markdown (artículos, páginas)
├── theme/                # Tema personalizado de Pelican
│   ├── templates/        # Plantillas Jinja2
│   │   ├── base.html     # Layout global (header, nav, footer)
│   │   └── index.html    # Landing page con todas las secciones
│   └── static/
│       ├── css/
│       │   └── style.css # Estilos responsivos (Flexbox/Grid)
│       ├── js/
│       │   └── main.js   # Interactividad (menú móvil, filtros)
│       └── images/       # Imágenes y assets
├── pelicanconf.py        # Configuración de desarrollo
├── publishconf.py        # Configuración de producción
├── Makefile              # Comandos de build
└── requirements.txt      # Dependencias Python
```

## Flujo de trabajo

1. Crea una rama desde `main` con un nombre descriptivo:

```bash
git checkout -b feature/nombre-descriptivo
```

2. Realiza tus cambios y verifica que el sitio se genera correctamente:

```bash
make html
```

3. Haz commit de tus cambios con un mensaje claro:

```bash
git add .
git commit -m "Descripción breve del cambio"
```

4. Envía tu rama y abre un Pull Request:

```bash
git push origin feature/nombre-descriptivo
```

## Convenciones

### Ramas

| Prefijo      | Uso                          |
|--------------|------------------------------|
| `feature/`   | Nueva funcionalidad          |
| `fix/`       | Corrección de errores        |
| `docs/`      | Cambios en documentación     |
| `style/`     | Cambios visuales / CSS       |
| `refactor/`  | Reestructuración de código   |

### Commits

- Usa mensajes en inglés: "add sponsor section", "fix mobile navbar".
- Un commit por cambio lógico.

### CSS

- Usa las custom properties definidas en `:root` (`--color-red`, `--font-primary`, etc.).
- Mobile-first: estilos base para móvil, `@media (min-width: ...)` para desktop.
- Usa las clases de utilidad existentes (`container`, `section`, `btn`, etc.).

### HTML / Templates

- Usa etiquetas semánticas (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`).
- Incluye atributos `aria-label` en elementos interactivos.
- Los placeholders usan bordes punteados (`dashed`) y textos descriptivos.

## ¿Qué puedo contribuir?

- Reemplazar placeholders con logos e imágenes reales.
- Mejorar la accesibilidad (contraste, navegación por teclado).
- Agregar contenido a las secciones cuando la info esté disponible.
- Optimizar performance (comprimir imágenes, minificar CSS).
- Reportar bugs o proponer mejoras en los [Issues](https://github.com/Flisol-Cuenca/flisolcuenca/issues).

## Código de conducta

Este proyecto sigue los principios del software libre y la comunidad FLISOL. Sé respetuoso, inclusivo y colaborativo.

## Licencia

Las contribuciones quedan bajo la misma licencia del proyecto. Consulta el archivo `LICENSE` para más detalles.
