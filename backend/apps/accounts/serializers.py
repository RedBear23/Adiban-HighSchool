from django.contrib.auth import authenticate, password_validation
from rest_framework import serializers

from .models import User
from .validators import normalize_digits


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "id",
            "first_name",
            "last_name",
            "national_id",
            "phone_number",
            "profile_picture",
            "role",
        )
        read_only_fields = (
            "id",
            "national_id",
            "role",
        )

    def validate_phone_number(self, value):
        return normalize_digits(value)


class RegisterSerializer(serializers.ModelSerializer):
    """
    Serializer responsible for public user registration.

    The role field is intentionally excluded. Every user created through
    registration is assigned the student role by UserManager.
    """

    password = serializers.CharField(
        write_only=True,
        trim_whitespace=False,
    )

    class Meta:
        model = User
        fields = (
            "id",
            "first_name",
            "last_name",
            "national_id",
            "phone_number",
            "profile_picture",
            "password",
        )
        read_only_fields = ("id",)

    def validate_national_id(self, value):
        return normalize_digits(value)

    def validate_phone_number(self, value):
        return normalize_digits(value)

    def validate_password(self, value):
        password_validation.validate_password(value)
        return value

    def create(self, validated_data):
        password = validated_data.pop("password")

        return User.objects.create_user(
            password=password,
            **validated_data,
        )


class LoginSerializer(serializers.Serializer):
    """
    Validate credentials for session-based authentication.
    """

    national_id = serializers.CharField(
        max_length=10,
        write_only=True,
    )

    password = serializers.CharField(
        write_only=True,
        trim_whitespace=False,
    )

    def validate(self, attrs):
        request = self.context.get("request")

        national_id = normalize_digits(
            attrs["national_id"]
        )
        password = attrs["password"]

        user = authenticate(
            request=request,
            national_id=national_id,
            password=password,
        )

        if user is None:
            raise serializers.ValidationError(
                "کد ملی یا رمز عبور اشتباه است."
            )

        if not user.is_active:
            raise serializers.ValidationError(
                "حساب کاربری شما غیرفعال است."
            )

        attrs["user"] = user

        return attrs