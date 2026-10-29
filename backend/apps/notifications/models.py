from django.conf import settings
from django.db import models


class Notification(models.Model):
    class NotificationType(models.TextChoices):
        NEWS = "news", "خبر"
        ANNOUNCEMENT = "announcement", "اطلاعیه"
        EXAM = "exam", "امتحان"
        EVENT = "event", "رویداد"
        SYSTEM = "system", "سیستم"

    recipient = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="notifications",
        verbose_name="دریافت‌کننده",
    )

    title = models.CharField(
        max_length=150,
        verbose_name="عنوان",
    )

    message = models.TextField(
        verbose_name="متن اعلان",
    )

    notification_type = models.CharField(
        max_length=20,
        choices=NotificationType.choices,
        default=NotificationType.SYSTEM,
        verbose_name="نوع اعلان",
    )

    link = models.CharField(
        max_length=500,
        blank=True,
        verbose_name="لینک",
    )

    is_read = models.BooleanField(
        default=False,
        verbose_name="خوانده شده",
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="زمان ایجاد",
    )

    class Meta:
        verbose_name = "اعلان"
        verbose_name_plural = "اعلان‌ها"
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.title} - {self.recipient}"