from django.urls import path

from .views import GalleryImageDetailView, GalleryImageListView


urlpatterns = [
    path(
        "",
        GalleryImageListView.as_view(),
        name="gallery-list",
    ),
    path(
        "<int:pk>/",
        GalleryImageDetailView.as_view(),
        name="gallery-detail",
    ),
]