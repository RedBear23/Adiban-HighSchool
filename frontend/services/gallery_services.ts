import { api } from "./api";

import type { GalleryImage } from "@/types/gallery";

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const response = await api.get<GalleryImage[]>("/gallery/");

  return response.data;
}