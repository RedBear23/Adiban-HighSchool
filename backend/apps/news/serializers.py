from rest_framework import serializers
import jdatetime

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

    jalali_date = serializers.SerializerMethodField()

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
            "jalali_date",
            "time",
        )

    def get_jalali_date(self, obj):
        jalali_date = jdatetime.date.fromgregorian(
            date=obj.date,
        )

        return jalali_date.strftime("%Y/%m/%d")