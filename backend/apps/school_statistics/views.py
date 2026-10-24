from rest_framework.response import Response
from rest_framework.views import APIView

from apps.accounts.models import User
from apps.teachers.models import Teacher


class StatisticsView(APIView):
    def get(self, request):
        return Response(
            {
                "teachers_count": Teacher.objects.count(),
                "students_count": User.objects.filter(
                    role="student",
                ).count(),
                "classes_count": 12,
                "major_count": 2,
            }
        )