from django.contrib import admin

from .models import News


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "author",
        "date",
        "time",
    )

    search_fields = (
        "title",
        "descriptions",
        "author__first_name",
        "author__last_name",
        "author__national_id",
    )

    list_filter = (
        "date",
        "author__role",
    )

    readonly_fields = (
        "date",
        "time",
    )

    prepopulated_fields = {
        "slug": ("title",),
    }

    autocomplete_fields = (
        "author",
    )

    ordering = (
        "-date",
        "-time",
    )