from rest_framework.authentication import SessionAuthentication


class CookieSessionAuthentication(SessionAuthentication):
    """
    Session-based authentication using Django's HttpOnly session cookie.

    Django reads the session cookie and AuthenticationMiddleware resolves
    request.user before DRF performs authentication.
    """

    pass