from rest_framework import generics

from .models import News
from .permissions import NewsPermission
from .serializers import NewsSerializer


class NewsListCreateView(generics.ListCreateAPIView):
    queryset = News.objects.select_related("author").all()
    serializer_class = NewsSerializer
    permission_classes = [NewsPermission]

    def perform_create(self, serializer):
        serializer.save(
            author=self.request.user,
        )


class NewsDetailView(generics.RetrieveUpdateAPIView):
    queryset = News.objects.select_related("author").all()
    serializer_class = NewsSerializer
    permission_classes = [NewsPermission]

    lookup_field = "slug"