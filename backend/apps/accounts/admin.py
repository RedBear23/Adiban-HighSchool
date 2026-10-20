from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .models import User


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    model = User

    list_display = (
        "national_id",
        "first_name",
        "last_name",
        "phone_number",
        "role",
        "is_active",
        "is_staff",
    )

    list_filter = (
        "role",
        "is_active",
        "is_staff",
        "is_superuser",
    )

    search_fields = (
        "national_id",
        "first_name",
        "last_name",
        "phone_number",
    )

    ordering = ("-date_joined",)

    fieldsets = (
        (
            None,
            {
                "fields": (
                    "national_id",
                    "password",
                )
            },
        ),
        (
            "اطلاعات شخصی",
            {
                "fields": (
                    "first_name",
                    "last_name",
                    "phone_number",
                    "profile_picture",
                )
            },
        ),
        (
            "نقش",
            {
                "fields": (
                    "role",
                )
            },
        ),
        (
            "دسترسی‌ها",
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                )
            },
        ),
        (
            "تاریخ‌ها",
            {
                "fields": (
                    "last_login",
                    "date_joined",
                )
            },
        ),
    )

    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "national_id",
                    "password1",
                    "password2",
                    "first_name",
                    "last_name",
                    "phone_number",
                    "role",
                    "is_active",
                    "is_staff",
                    "is_superuser",
                ),
            },
        ),
    )