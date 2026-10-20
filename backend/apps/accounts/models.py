from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models

from .validators import (
    normalize_digits,
    validate_iranian_national_id,
    validate_iranian_phone_number,
)


class UserManager(BaseUserManager):
    """
    Custom manager for the User model.

    National ID is used as the authentication identifier
    instead of username.
    """

    use_in_migrations = True

    def _create_user(self, national_id, password, **extra_fields):
        if not national_id:
            raise ValueError("وارد کردن کد ملی الزامی است.")

        if not password:
            raise ValueError("وارد کردن رمز عبور الزامی است.")

        # Normalize Persian/Arabic digits before validation and storage.
        national_id = normalize_digits(national_id)

        phone_number = extra_fields.get("phone_number")

        if phone_number:
            extra_fields["phone_number"] = normalize_digits(
                phone_number
            )

        user = self.model(
            national_id=national_id,
            **extra_fields,
        )

        # Hash and assign the password before model validation.
        user.set_password(password)

        # Validate the complete user object.
        user.full_clean()

        user.save(using=self._db)

        return user

    def create_user(
        self,
        national_id,
        password=None,
        **extra_fields,
    ):
        """
        Create a normal user.

        Every normal user is always created as a student,
        regardless of any role passed to this method.
        """
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)

        # Enforce the registration business rule.
        extra_fields["role"] = self.model.Role.STUDENT

        return self._create_user(
            national_id=national_id,
            password=password,
            **extra_fields,
        )

    def create_superuser(
        self,
        national_id,
        password=None,
        **extra_fields,
    ):
        """
        Create a Django superuser.
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(
                "Superuser باید is_staff=True داشته باشد."
            )

        if extra_fields.get("is_superuser") is not True:
            raise ValueError(
                "Superuser باید is_superuser=True داشته باشد."
            )

        return self._create_user(
            national_id=national_id,
            password=password,
            **extra_fields,
        )

class User(AbstractUser):
    class Role(models.TextChoices):
        STUDENT = "student", "دانش‌آموز"
        TEACHER = "teacher", "معلم"
        PRINCIPAL = "principal", "مدیر مدرسه"
        VICE_PRINCIPAL = "vice_principal", "معاون"
        PROCTOR = "proctor", "ناظم"
        CUSTODIAN = "custodian", "سرایدار"

    # Authentication is based on national_id,
    # so the default username field is unnecessary.
    username = None

    national_id = models.CharField(
        max_length=10,
        unique=True,
        validators=[validate_iranian_national_id],
        verbose_name="کد ملی",
    )

    phone_number = models.CharField(
        max_length=11,
        validators=[validate_iranian_phone_number],
        verbose_name="شماره تلفن",
    )

    profile_picture = models.ImageField(
        upload_to="profiles/",
        blank=True,
        null=True,
        verbose_name="عکس پروفایل",
    )

    role = models.CharField(
        max_length=20,
        choices=Role.choices,
        default=Role.STUDENT,
        verbose_name="نقش",
    )

    USERNAME_FIELD = "national_id"
    REQUIRED_FIELDS = []

    objects = UserManager()

    class Meta:
        verbose_name = "کاربر"
        verbose_name_plural = "کاربران"
        ordering = ["-date_joined"]

    def clean(self):
        """
        Normalize user input before model validation.

        This also protects creation/update paths outside the API,
        such as Django Admin.
        """
        super().clean()

        if self.national_id:
            self.national_id = normalize_digits(
                self.national_id
            )

        if self.phone_number:
            self.phone_number = normalize_digits(
                self.phone_number
            )

    def save(self, *args, **kwargs):
        """
        Ensure normalized values are stored in the database.

        Model.save() does not call full_clean() automatically,
        therefore normalization is also performed here.
        """
        if self.national_id:
            self.national_id = normalize_digits(
                self.national_id
            )

        if self.phone_number:
            self.phone_number = normalize_digits(
                self.phone_number
            )

        super().save(*args, **kwargs)

    def __str__(self):
        full_name = self.get_full_name().strip()

        if full_name:
            return f"{full_name} ({self.national_id})"

        return self.national_id