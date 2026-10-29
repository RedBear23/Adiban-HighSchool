from django.urls import path

from .views import (
    ChangePasswordView,
    CsrfTokenView,
    CurrentUserView,
    LoginView,
    LogoutView,
    ProfilePictureView,
    RegisterView,
)


app_name = "accounts"


urlpatterns = [
    path(
        "csrf/",
        CsrfTokenView.as_view(),
        name="csrf",
    ),
    path(
        "register/",
        RegisterView.as_view(),
        name="register",
    ),
    path(
        "login/",
        LoginView.as_view(),
        name="login",
    ),
    path(
        "logout/",
        LogoutView.as_view(),
        name="logout",
    ),
    path(
        "me/",
        CurrentUserView.as_view(),
        name="me",
    ),
    path(
        "profile-picture/",
        ProfilePictureView.as_view(),
        name="profile-picture",
    ),
    path(
        "change-password/",
        ChangePasswordView.as_view(),
        name="change-password",
    ),
]