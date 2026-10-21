from rest_framework.permissions import SAFE_METHODS, BasePermission

from apps.accounts.models import User


class NewsPermission(BasePermission):
    """
    Public users can read news.

    Teachers, principals and vice principals can create news.

    Existing news can only be modified by its author or a Django
    staff/superuser.
    """

    allowed_roles = {
        User.Role.TEACHER,
        User.Role.PRINCIPAL,
        User.Role.VICE_PRINCIPAL,
    }

    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True

        if not request.user.is_authenticated:
            return False

        if request.user.is_staff or request.user.is_superuser:
            return True

        return request.user.role in self.allowed_roles

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True

        if request.user.is_staff or request.user.is_superuser:
            return True

        return obj.author_id == request.user.id