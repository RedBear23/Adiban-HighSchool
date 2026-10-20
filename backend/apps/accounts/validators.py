from django.core.exceptions import ValidationError


PERSIAN_DIGITS = "۰۱۲۳۴۵۶۷۸۹"
ARABIC_DIGITS = "٠١٢٣٤٥٦٧٨٩"
ENGLISH_DIGITS = "0123456789"

DIGIT_TRANSLATION_TABLE = str.maketrans(
    PERSIAN_DIGITS + ARABIC_DIGITS,
    ENGLISH_DIGITS + ENGLISH_DIGITS,
)


def normalize_digits(value: str) -> str:
    """
    Convert Persian and Arabic digits to English digits.

    Examples:
        ۰۹۱۲۳۴۵۶۷۸۹ -> 09123456789
        ٠٩١٢٣٤٥٦٧٨٩ -> 09123456789
    """
    if value is None:
        return value

    return str(value).strip().translate(DIGIT_TRANSLATION_TABLE)


def validate_iranian_national_id(value: str) -> None:
    """
    Validate an Iranian national ID using its checksum algorithm.
    """
    value = normalize_digits(value)

    if len(value) != 10 or not value.isascii() or not value.isdigit():
        raise ValidationError(
            "کد ملی باید دقیقاً شامل ۱۰ رقم باشد."
        )

    # Reject repeated values such as:
    # 0000000000, 1111111111, ...
    if len(set(value)) == 1:
        raise ValidationError(
            "کد ملی واردشده معتبر نیست."
        )

    check_digit = int(value[-1])

    weighted_sum = sum(
        int(value[index]) * (10 - index)
        for index in range(9)
    )

    remainder = weighted_sum % 11

    expected_check_digit = (
        remainder
        if remainder < 2
        else 11 - remainder
    )

    if check_digit != expected_check_digit:
        raise ValidationError(
            "کد ملی واردشده معتبر نیست."
        )


def validate_iranian_phone_number(value: str) -> None:
    """
    Validate an Iranian mobile phone number.

    Persian and Arabic digits are accepted and normalized
    before validation.
    """
    value = normalize_digits(value)

    if (
        len(value) != 11
        or not value.isascii()
        or not value.isdigit()
        or not value.startswith("09")
    ):
        raise ValidationError(
            "شماره تلفن باید یک شماره موبایل معتبر ایرانی "
            "مانند 09123456789 باشد."
        )