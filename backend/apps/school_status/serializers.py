from rest_framework import serializers

from .models import SchoolStatus


class SchoolStatusSerializer(serializers.Serializer):
    mode = serializers.ChoiceField(
        choices=SchoolStatus.Mode.choices,
    )

    is_open = serializers.BooleanField()

    status = serializers.ChoiceField(
        choices=[
            ("open", "باز"),
            ("closed", "بسته"),
        ],
    )