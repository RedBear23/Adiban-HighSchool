import { api } from "./api";

import type {
  ChangePasswordInput,
  LoginInput,
  MessageResponse,
  ProfilePictureInput,
  RegisterInput,
  User,
} from "@/types/accounts";

export async function getCsrfToken(): Promise<void> {
  await api.get("/auth/csrf/");
}

export async function registerUser(
  data: RegisterInput,
): Promise<User> {
  const formData = new FormData();

  formData.append("national_id", data.national_id);
  formData.append("password", data.password);
  formData.append("first_name", data.first_name);
  formData.append("last_name", data.last_name);
  formData.append("phone_number", data.phone_number);

  if (data.profile_picture) {
    formData.append(
      "profile_picture",
      data.profile_picture,
    );
  }

  const response = await api.post<User>(
    "/auth/register/",
    formData,
  );

  return response.data;
}

export async function loginUser(
  data: LoginInput,
): Promise<User> {
  const response = await api.post<User>(
    "/auth/login/",
    data,
  );

  return response.data;
}

export async function logoutUser(): Promise<MessageResponse> {
  const response = await api.post<MessageResponse>(
    "/auth/logout/",
  );

  return response.data;
}

export async function getCurrentUser(): Promise<User> {
  const response = await api.get<User>(
    "/auth/me/",
  );

  return response.data;
}

export async function updateProfilePicture(
  data: ProfilePictureInput,
): Promise<User> {
  const formData = new FormData();

  formData.append(
    "profile_picture",
    data.profile_picture,
  );

  const response = await api.patch<User>(
    "/auth/profile-picture/",
    formData,
  );

  return response.data;
}

export async function changePassword(
  data: ChangePasswordInput,
): Promise<MessageResponse> {
  const response = await api.post<MessageResponse>(
    "/auth/change-password/",
    data,
  );

  return response.data;
}