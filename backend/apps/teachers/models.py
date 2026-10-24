from django.db import models


class Teacher(models.Model):
    first_name = models.CharField(
        max_length=50,
        verbose_name="نام",
        null=True,
        blank=True,
    )

    last_name = models.CharField(
        max_length=50,
        verbose_name="نام خانوادگی",
    )

    image = models.ImageField(
        upload_to="teachers/",
        verbose_name="تصویر",
    )

    short_description = models.CharField(
        max_length=255,
        verbose_name="توضیح کوتاه",
    )

    subjects = models.JSONField(
        default=list,
        verbose_name="دروس",
    )

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    class Meta:
        verbose_name = "معلم"
        verbose_name_plural = "معلمان"