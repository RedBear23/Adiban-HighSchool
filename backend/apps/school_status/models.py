from django.db import models


class SchoolStatus(models.Model):
    class Mode(models.TextChoices):
        AUTOMATIC = "automatic", "خودکار"
        OPEN = "open", "همیشه باز"
        CLOSED = "closed", "همیشه بسته"

    # شناسه ثابت باعث می‌شود فقط یک رکورد تنظیمات داشته باشیم.
    id = models.PositiveSmallIntegerField(
        primary_key=True,
        default=1,
        editable=False,
    )

    mode = models.CharField(
        max_length=10,
        choices=Mode.choices,
        default=Mode.AUTOMATIC,
    )

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "وضعیت مدرسه"
        verbose_name_plural = "وضعیت مدرسه"
        constraints = [
            models.CheckConstraint(
                condition=models.Q(id=1),
                name="school_status_singleton_id",
            ),
        ]

    def save(self, *args, **kwargs):
        self.pk = 1
        super().save(*args, **kwargs)

    @classmethod
    def get_settings(cls):
        # اگر رکورد تنظیمات هنوز ساخته نشده باشد، حالت خودکار ایجاد می‌شود.
        instance, _ = cls.objects.get_or_create(
            pk=1,
            defaults={"mode": cls.Mode.AUTOMATIC},
        )
        return instance

    def __str__(self):
        return "تنظیمات وضعیت مدرسه"