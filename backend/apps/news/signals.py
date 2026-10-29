from django.db.models.signals import post_save
from django.dispatch import receiver

from apps.notifications.services import (
    notify_students_about_news,
)

from .models import News


@receiver(post_save, sender=News)
def notify_students_when_news_created(
    sender,
    instance,
    created,
    **kwargs,
):
    if not created:
        return

    notify_students_about_news(instance)