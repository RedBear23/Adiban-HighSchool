from django.conf import settings
from django.db import models
from django.utils.text import slugify


class News(models.Model):
    title = models.CharField(
        max_length=200,
        verbose_name="عنوان",
    )

    descriptions = models.TextField(
        verbose_name="متن خبر",
    )

    slug = models.SlugField(
        max_length=220,
        unique=True,
        allow_unicode=True,
        blank=True,
        verbose_name="اسلاگ",
    )

    image = models.ImageField(
        upload_to="news/",
        verbose_name="تصویر خبر",
    )

    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.PROTECT,
        related_name="news",
        verbose_name="نویسنده",
    )

    date = models.DateField(
        auto_now_add=True,
        verbose_name="تاریخ انتشار",
    )

    time = models.TimeField(
        auto_now_add=True,
        verbose_name="زمان انتشار",
    )

    class Meta:
        verbose_name = "خبر"
        verbose_name_plural = "اخبار"
        ordering = ["-date", "-time"]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = self._generate_unique_slug()

        super().save(*args, **kwargs)

    def _generate_unique_slug(self):
        """
        Generate a Unicode-compatible unique slug from the news title.

        Persian characters are preserved.
        """
        base_slug = slugify(
            self.title,
            allow_unicode=True,
        )

        # Handle titles containing no slug-compatible characters.
        if not base_slug:
            base_slug = "news"

        slug = base_slug
        counter = 2

        while News.objects.filter(slug=slug).exclude(
            pk=self.pk
        ).exists():
            slug = f"{base_slug}-{counter}"
            counter += 1

        return slug

    def __str__(self):
        return self.title