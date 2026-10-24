from rest_framework import generics

from .models import GalleryImage
from .serializers import GalleryImageSerializer


class GalleryImageListView(generics.ListAPIView):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer


class GalleryImageDetailView(generics.RetrieveAPIView):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer