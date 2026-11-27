from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import SchoolStatusSerializer
from .services import get_school_status


class SchoolStatusAPIView(APIView):
    authentication_classes = []
    permission_classes = [AllowAny]

    def get(self, request):
        status_data = get_school_status()

        serializer = SchoolStatusSerializer(instance=status_data)

        return Response(serializer.data)