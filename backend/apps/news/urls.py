from django.urls import path

from .views import (
    NewsDetailView,
    NewsListCreateView,
)


app_name = "news"


urlpatterns = [
    path(
        "",
        NewsListCreateView.as_view(),
        name="news-list-create",
    ),
    path(
        "<str:slug>/",
        NewsDetailView.as_view(),
        name="news-detail",
    ),
]