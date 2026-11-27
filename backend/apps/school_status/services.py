from datetime import datetime, time
from zoneinfo import ZoneInfo
from django.utils import timezone
from .models import SchoolStatus


TEHRAN_TIMEZONE = ZoneInfo("Asia/Tehran")

# روزهای کاری بر اساس weekday پایتون:
# شنبه: ۵، یکشنبه: ۶، دوشنبه: ۰، سه‌شنبه: ۱، چهارشنبه: ۲
OPEN_WEEKDAYS = {5, 6, 0, 1, 2}

SCHOOL_OPENING_TIME = time(8, 0)
SCHOOL_CLOSING_TIME = time(14, 0)


def get_current_time(now=None):
    if now is None:
        return timezone.localtime()

    if timezone.is_naive(now):
        now = timezone.make_aware(now)

    return timezone.localtime(now)


def is_school_open(mode, now=None):
    """وضعیت باز یا بسته بودن مدرسه را محاسبه می‌کند."""

    if mode == SchoolStatus.Mode.OPEN:
        return True

    if mode == SchoolStatus.Mode.CLOSED:
        return False

    current_time = get_current_time(now)

    is_working_day = current_time.weekday() in OPEN_WEEKDAYS
    is_working_hour = (
        SCHOOL_OPENING_TIME
        <= current_time.time().replace(tzinfo=None)
        < SCHOOL_CLOSING_TIME
    )

    return is_working_day and is_working_hour


def get_school_status(now=None):
    """تنظیمات و وضعیت محاسبه‌شده مدرسه را برمی‌گرداند."""

    settings = SchoolStatus.get_settings()
    is_open = is_school_open(settings.mode, now)

    return {
        "mode": settings.mode,
        "is_open": is_open,
        "status": "open" if is_open else "closed",
    }