from django.urls import path

from .views import (
    MarkAllNotificationsAsReadView,
    MarkNotificationAsReadView,
    NotificationListView,
    UnreadNotificationCountView,
)


app_name = "notifications"


urlpatterns = [
    path(
        "",
        NotificationListView.as_view(),
        name="notification-list",
    ),
    path(
        "unread-count/",
        UnreadNotificationCountView.as_view(),
        name="notification-unread-count",
    ),
    path(
        "<int:notification_id>/read/",
        MarkNotificationAsReadView.as_view(),
        name="notification-read",
    ),
    path(
        "read-all/",
        MarkAllNotificationsAsReadView.as_view(),
        name="notification-read-all",
    ),
]