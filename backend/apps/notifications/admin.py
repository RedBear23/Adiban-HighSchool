from django.contrib import admin

from .models import Notification


@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "title",
        "recipient",
        "notification_type",
        "is_read",
        "created_at",
    )

    list_filter = (
        "notification_type",
        "is_read",
        "created_at",
    )

    search_fields = (
        "title",
        "message",
        "recipient__first_name",
        "recipient__last_name",
        "recipient__national_id",
    )

    readonly_fields = (
        "created_at",
    )

    ordering = (
        "-created_at",
    )

    list_select_related = (
        "recipient",
    )