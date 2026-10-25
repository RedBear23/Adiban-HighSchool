export type GallerySubject =
  | "school"
  | "activities"
  | "events";

export interface GalleryImage {
  id: number;
  name: string;
  image: string;
  subject: GallerySubject;
  subject_display: string;
  short_description: string;
}