from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    # Django Admin
    path("admin/", admin.site.urls),

    # API
    path(
        "api/auth/",
        include("apps.accounts.urls"),
    ),
    path(
        "api/news/",
        include("apps.news.urls"),
    ),
    path(
        "api/teachers/",
        include("apps.teachers.urls")
    ),
    path(
        "api/statistics/",
        include("apps.school_statistics.urls")
    )
]


if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT,
    )