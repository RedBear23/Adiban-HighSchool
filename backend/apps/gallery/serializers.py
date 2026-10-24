from rest_framework import serializers

from .models import GalleryImage


class GalleryImageSerializer(serializers.ModelSerializer):
    subject_display = serializers.CharField(
        source="get_subject_display",
        read_only=True,
    )

    class Meta:
        model = GalleryImage
        fields = [
            "id",
            "name",
            "image",
            "subject",
            "subject_display",
            "short_description",
        ]