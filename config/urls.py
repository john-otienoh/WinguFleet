from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('rest_framework.urls')),
    # path('api/users/', include('apps.users.urls')),
    # path('api/fleet/', include('apps.fleet.urls')),
    # path('api/clients/', include('apps.clients.urls')),
    # path('api/bookings/', include('apps.bookings.urls')),
    # path('api/operations/', include('apps.operations.urls')),
    # path('api/finance/', include('apps.finance.urls')),
    # path('portal/', include('apps.portal.urls')),
    # path('reports/', include('apps.reports.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    
    # Debug toolbar
    if 'debug_toolbar' in settings.INSTALLED_APPS:
        import debug_toolbar
        urlpatterns = [path('__debug__/', include(debug_toolbar.urls))] + urlpatterns

# Custom admin site configuration
admin.site.site_header = "Charter Management System"
admin.site.site_title = "Charter Admin"
admin.site.index_title = "Welcome to Charter Management"
