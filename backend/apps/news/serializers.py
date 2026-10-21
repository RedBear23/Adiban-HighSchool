from rest_framework import serializers

from apps.accounts.models import User

from .models import News


class NewsAuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "id",
            "first_name",
            "last_name",
            "role",
            "profile_picture",
        )
        read_only_fields = fields


class NewsSerializer(serializers.ModelSerializer):
    author = NewsAuthorSerializer(
        read_only=True,
    )

    class Meta:
        model = News
        fields = (
            "id",
            "title",
            "descriptions",
            "slug",
            "image",
            "author",
            "date",
            "time",
        )

        read_only_fields = (
            "id",
            "slug",
            "author",
            "date",
            "time",
        )