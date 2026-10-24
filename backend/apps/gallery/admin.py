from django.contrib import admin

from .models import GalleryImage


@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "subject",
        "short_description",
    )
    list_filter = ("subject",)
    search_fields = (
        "name",
        "short_description",
    )