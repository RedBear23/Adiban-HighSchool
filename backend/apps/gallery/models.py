from django.db import models


class GalleryImage(models.Model):
    class Subject(models.TextChoices):
        SCHOOL = "school", "محیط مدرسه"
        ACTIVITIES = "activities", "فعالیت‌ها"
        EVENTS = "events", "مراسم‌ها"

    name = models.CharField(
        max_length=100,
        verbose_name="نام عکس",
    )

    image = models.ImageField(
        upload_to="gallery/",
        verbose_name="عکس",
    )

    subject = models.CharField(
        max_length=20,
        choices=Subject.choices,
        verbose_name="موضوع عکس",
    )

    short_description = models.CharField(
        max_length=255,
        verbose_name="توضیح کوتاه",
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "عکس گالری"
        verbose_name_plural = "عکس‌های گالری"
        ordering = ["-id"]