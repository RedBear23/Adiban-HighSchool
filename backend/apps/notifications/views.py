from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Notification
from .serializers import NotificationSerializer


class NotificationListView(APIView):
    """
    Return notifications belonging to the authenticated user.
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        notifications = Notification.objects.filter(
            recipient=request.user,
        )

        serializer = NotificationSerializer(
            notifications,
            many=True,
        )

        return Response(
            serializer.data,
            status=status.HTTP_200_OK,
        )


class UnreadNotificationCountView(APIView):
    """
    Return the number of unread notifications
    belonging to the authenticated user.
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        count = Notification.objects.filter(
            recipient=request.user,
            is_read=False,
        ).count()

        return Response(
            {"count": count},
            status=status.HTTP_200_OK,
        )


class MarkNotificationAsReadView(APIView):
    """
    Mark one of the authenticated user's
    notifications as read.
    """

    permission_classes = [IsAuthenticated]

    def patch(self, request, notification_id):
        notification = get_object_or_404(
            Notification,
            id=notification_id,
            recipient=request.user,
        )

        if not notification.is_read:
            notification.is_read = True
            notification.save(
                update_fields=["is_read"],
            )

        return Response(
            NotificationSerializer(
                notification,
            ).data,
            status=status.HTTP_200_OK,
        )


class MarkAllNotificationsAsReadView(APIView):
    """
    Mark all unread notifications belonging
    to the authenticated user as read.
    """

    permission_classes = [IsAuthenticated]

    def post(self, request):
        updated_count = Notification.objects.filter(
            recipient=request.user,
            is_read=False,
        ).update(
            is_read=True,
        )

        return Response(
            {
                "detail": (
                    "همه اعلان‌ها به عنوان خوانده‌شده "
                    "علامت‌گذاری شدند."
                ),
                "updated_count": updated_count,
            },
            status=status.HTTP_200_OK,
        )