from django.contrib.auth import get_user_model

from .models import Notification

User = get_user_model()


def create_notification_for_role(
    *,
    role,
    title,
    message,
    notification_type=Notification.NotificationType.SYSTEM,
    link="",
):
    students = User.objects.filter(
        role=role,
        is_active=True,
    )

    notifications = [
        Notification(
            recipient=student,
            title=title,
            message=message,
            notification_type=notification_type,
            link=link,
        )
        for student in students
    ]

    return Notification.objects.bulk_create(
        notifications,
    )


def notify_students_about_news(news):
    return create_notification_for_role(
        role="student",
        title=news.title,
        message=news.descriptions,
        notification_type=Notification.NotificationType.NEWS,
        link=f"/news/{news.slug}",
    )