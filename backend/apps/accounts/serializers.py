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
        read_only_fields = fields


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


class ProfilePictureSerializer(serializers.ModelSerializer):
    """
    Allow users to update only their profile picture.
    """

    class Meta:
        model = User
        fields = ("profile_picture",)


class ChangePasswordSerializer(serializers.Serializer):
    """
    Validate and change the authenticated user's password.
    """

    current_password = serializers.CharField(
        write_only=True,
        trim_whitespace=False,
    )

    new_password = serializers.CharField(
        write_only=True,
        trim_whitespace=False,
    )

    confirm_password = serializers.CharField(
        write_only=True,
        trim_whitespace=False,
    )

    def validate_current_password(self, value):
        user = self.context["request"].user

        if not user.check_password(value):
            raise serializers.ValidationError(
                "رمز عبور فعلی صحیح نیست."
            )

        return value

    def validate(self, attrs):
        if attrs["new_password"] != attrs["confirm_password"]:
            raise serializers.ValidationError(
                {
                    "confirm_password": (
                        "تکرار رمز عبور با رمز عبور جدید مطابقت ندارد."
                    )
                }
            )

        user = self.context["request"].user

        password_validation.validate_password(
            attrs["new_password"],
            user=user,
        )

        return attrs

    def save(self, **kwargs):
        user = self.context["request"].user

        user.set_password(
            self.validated_data["new_password"]
        )
        user.save(update_fields=["password"])

        return user