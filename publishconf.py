# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys

sys.path.append(os.curdir)
from pelicanconf import *

# If your site is available via HTTPS, make sure SITEURL begins with https://
SITEURL = os.environ.get("SITEURL", "https://flisol-cuenca.github.io")

# Guard against a SITEURL that is missing its scheme (e.g. the repository
# variable set to "flisol-cuenca.github.io" instead of a full URL). Without a
# scheme the browser treats asset URLs as relative paths, so CSS/JS resolve to
# a 404 and the site renders unstyled. Normalize and strip any trailing slash.
SITEURL = SITEURL.strip().rstrip("/")
if SITEURL and "://" not in SITEURL:
    SITEURL = "https://" + SITEURL

RELATIVE_URLS = False

FEED_ALL_ATOM = "feeds/all.atom.xml"
CATEGORY_FEED_ATOM = "feeds/{slug}.atom.xml"

DELETE_OUTPUT_DIRECTORY = True

# Following items are often useful when publishing

# DISQUS_SITENAME = ""
# GOOGLE_ANALYTICS = ""
