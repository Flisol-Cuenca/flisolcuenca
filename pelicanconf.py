from datetime import datetime

AUTHOR = 'flisolcuenca'
SITENAME = 'FLISOL Cuenca'
SITEURL = ""

PATH = "content"
THEME = "theme"

# Cache-busting stamp appended to static asset URLs (CSS/JS).
# A fresh value is generated on every build so visitors always receive
# the latest versions instead of stale browser/CDN caches.
ASSET_VERSION = datetime.utcnow().strftime("%Y%m%d%H%M")

TIMEZONE = 'America/Guayaquil'
DEFAULT_LANG = 'ES'

FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

DIRECT_TEMPLATES = ['index']

DEFAULT_PAGINATION = False


# Variables para SEO 
# ── Archivos estáticos en la raíz del output 
STATIC_PATHS = ['extras']
EXTRA_PATH_METADATA = {
    'extras/robots.txt': {'path': 'robots.txt'},
}

# ── Templates que se renderizan directamente como archivos
TEMPLATE_PAGES = {
    'sitemap.xml': 'sitemap.xml',
    'hall-of-fame.html': 'voluntarios/index.html',
}

# Salón de la Fama — voluntarios reconocidos
HALL_OF_FAME_VOLUNTEERS = [
    'María Armijos',
    'Leslie',
    'Xavier',
    'Andres',
    'Ramsis Peñaloza',
    'Jorge Cueva',
    'Aitor Campoverde',
    'Salomé Balcázar Betancourth',
    'Rocio Gonzalez Toral',
    'Xavier Lauca',
    'Oscar Emilio Guerrero Romero',
    'Anthony Romero',
    'Luis Efraín Yanza',
    'Yarleni Jara',
    'Veronica Cobos',
    'Leslie Culcay',
    'Cinthya Ramon',
    'Jonathan Vallejo',
    'Cristina Carchipulla',
    'Leonardo Gómez',
    'Gelois',
    'Manuel Diaz',
    'Paula Martinez',
    'Josué Sáenz',
    'Kevin Banegas',
    'Gabriel Córdoba',
    'Ismael Verdugo',
    'Sebastian Toledo',
    'Pablo Siranaula',
    'Daniel Guanga',
    'Jonnathan Parraga',
    'Sebastián Verdugo',
    'Juan Guillén',
    'Nicolas Ambrosi',
    'Mauricio Gonzalez',
    'Pedro Jaramillo',
    'Elian Chacha',
    'Zaid San Lucas',
]

SEO_DESCRIPTION = (
    'Festival Latinoamericano de Instalación de Software Libre en Cuenca, Ecuador. '
    'Charlas, talleres e InstallFest gratuitos el 16 de mayo de 2026 '
    'en la Universidad Politecnica Salesiana de Cuenca.'
)
SEO_KEYWORDS = (
    'FLISOL, software libre, Linux, Cuenca, Ecuador, instalación, '
    'código abierto, open source, festival, tecnología, Ubuntu, Debian, '
    'charlas, talleres, InstallFest'
)
OG_IMAGE = '/theme/img/og-flisol-cuenca-2026.jpg'

# Datos del evento
EVENT_NAME       = 'FLISOL Cuenca 2026'
EVENT_DATE_START = '2026-05-16T09:00:00-05:00'
EVENT_DATE_END   = '2026-05-16T17:00:00-05:00'
EVENT_LOCATION   = 'Universidad Politécnica Salesiana, Cuenca, Ecuador'
EVENT_CITY       = 'Cuenca'
EVENT_COUNTRY    = 'EC'
EVENT_STATUS     = 'EventScheduled'
EVENT_ATTENDANCE = 'OfflineEventAttendanceMode'

# Organización 
ORGANIZER_NAME   = 'FLISOL Cuenca'
ORGANIZER_EMAIL  = 'info@flisolcuenca.org'
TWITTER_HANDLE   = '@FLISOLCuenca'