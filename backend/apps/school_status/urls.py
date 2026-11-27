from django.urls import path
from .views import SchoolStatusAPIView

urlpatterns = [
    path("",SchoolStatusAPIView.as_view(),name="school-status",),
]