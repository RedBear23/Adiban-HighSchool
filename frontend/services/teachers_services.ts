import { api } from "./api";

import type { Teacher } from "@/types/teachers";

export async function getTeachers(): Promise<Teacher[]> {
  const response = await api.get<Teacher[]>(
    "/teachers/",
  );

  return response.data;
}

export async function getTeacher(
  id: number,
): Promise<Teacher> {
  const response = await api.get<Teacher>(
    `/teachers/${id}/`,
  );

  return response.data;
}
