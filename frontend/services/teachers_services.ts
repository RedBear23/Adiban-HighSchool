import { api } from "./api";

import type { Teacher } from "@/types/teachers";

export async function getTeachers(): Promise<Teacher[]> {
  const response = await api.get<Teacher[]>(
    "/teachers/",
  );

  return response.data;
}
