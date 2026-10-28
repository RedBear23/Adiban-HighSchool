import { api } from "./api";

import type { News } from "@/types/news";

export async function getNews(): Promise<News[]> {
  const response = await api.get<News[]>("/news/");

  return response.data;
}

export async function getNewsBySlug(
  slug: string,
): Promise<News> {
  const decodedSlug = decodeURIComponent(slug);

  const response = await api.get<News>(
    `/news/${decodedSlug}/`,
  );

  return response.data;
}