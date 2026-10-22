import { api } from "./api";

import type {
  LoginInput,
  MessageResponse,
  RegisterInput,
  User,
} from "@/types/accounts";


export async function getCsrfToken(): Promise<void> {
  await api.get("/auth/csrf/");
}


export async function registerUser(
  data: RegisterInput,
): Promise<User> {
  const response = await api.post<User>(
    "/auth/register/",
    data,
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