import { api } from "./api";

import type { Statistics } from "@/types/statistics";

export async function getStatistics(): Promise<Statistics> {
  const response = await api.get<Statistics>(
    "/statistics/",
  );

  return response.data;
}