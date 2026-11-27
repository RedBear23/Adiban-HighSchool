import type { SchoolStatus } from "@/types/school_status";

import { api } from "./api";

export async function getSchoolStatus(): Promise<SchoolStatus> {
  const response = await api.get<SchoolStatus>("/school-status/");

  return response.data;
}