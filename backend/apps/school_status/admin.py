from django.contrib import admin

from .models import SchoolStatus
from .services import is_school_open


@admin.register(SchoolStatus)
class SchoolStatusAdmin(admin.ModelAdmin):
    list_display = (
        "mode",
        "current_status",
        "updated_at",
    )

    fields = (
        "mode",
        "current_status",
        "updated_at",
    )

    readonly_fields = (
        "current_status",
        "updated_at",
    )

    @admin.display(description="وضعیت فعلی مدرسه")
    def current_status(self, obj):
        if obj is None:
            return "-"

        is_open = is_school_open(obj.mode)

        return "باز است" if is_open else "بسته است"

    def has_add_permission(self, request):
        # اجازه ساخت رکورد دوم را نمی‌دهیم.
        return not SchoolStatus.objects.filter(pk=1).exists()

    def has_delete_permission(self, request, obj=None):
        # رکورد تنظیمات نباید از پنل مدیریت حذف شود.
        return False