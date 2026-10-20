from django.contrib.auth import login, logout
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import (
    LoginSerializer,
    RegisterSerializer,
    UserSerializer,
)


class RegisterView(APIView):
    """
    Register a new user.

    All publicly registered users are created with the student role.
    """

    permission_classes = [AllowAny]
    authentication_classes = []

    def post(self, request):
        serializer = RegisterSerializer(
            data=request.data,
        )
        serializer.is_valid(raise_exception=True)

        user = serializer.save()

        return Response(
            UserSerializer(
                user,
                context={"request": request},
            ).data,
            status=status.HTTP_201_CREATED,
        )


class LoginView(APIView):
    """
    Authenticate a user and create a Django session.
    """

    permission_classes = [AllowAny]
    authentication_classes = []

    def post(self, request):
        serializer = LoginSerializer(
            data=request.data,
            context={"request": request},
        )
        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data["user"]

        login(request, user)

        return Response(
            UserSerializer(
                user,
                context={"request": request},
            ).data,
            status=status.HTTP_200_OK,
        )


class LogoutView(APIView):
    """
    Destroy the authenticated user's session.
    """

    permission_classes = [IsAuthenticated]

    def post(self, request):
        logout(request)

        return Response(
            {"detail": "با موفقیت از حساب کاربری خارج شدید."},
            status=status.HTTP_200_OK,
        )


class CurrentUserView(APIView):
    """
    Retrieve or update the authenticated user's profile.
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(
            request.user,
            context={"request": request},
        )

        return Response(
            serializer.data,
            status=status.HTTP_200_OK,
        )

    def patch(self, request):
        serializer = UserSerializer(
            request.user,
            data=request.data,
            partial=True,
            context={"request": request},
        )
        serializer.is_valid(raise_exception=True)

        user = serializer.save()

        return Response(
            UserSerializer(
                user,
                context={"request": request},
            ).data,
            status=status.HTTP_200_OK,
        )