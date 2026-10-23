export type UserRole =
  | "student"
  | "teacher"
  | "principal"
  | "vice_principal"
  | "proctor"
  | "custodian";

export interface User {
  id: number;
  national_id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  profile_picture: string | null;
  role: UserRole;
  date_joined: string;
}

export interface RegisterInput {
  national_id: string;
  password: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  profile_picture?: File | null;
}

export interface LoginInput {
  national_id: string;
  password: string;
}

export interface MessageResponse {
  detail: string;
}