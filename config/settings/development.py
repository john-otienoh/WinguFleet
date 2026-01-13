from .base import *


DEBUG = True

# Development-specific apps
INSTALLED_APPS += [
    'debug_toolbar',
    'django_extensions',
]

MIDDLEWARE += [
    'debug_toolbar.middleware.DebugToolbarMiddleware',
]

# Debug Toolbar
INTERNAL_IPS = ['127.0.0.1', 'localhost']

# CORS
CORS_ALLOW_ALL_ORIGINS = True

# Email to console
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
