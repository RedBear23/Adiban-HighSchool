import type { UserRole } from "./accounts";

export interface NewsAuthor {
  id: number;
  first_name: string;
  last_name: string;
  role: UserRole;
  profile_picture: string | null;
}

export interface News {
  id: number;
  title: string;
  descriptions: string;
  slug: string;
  image: string;
  author: NewsAuthor;
  date: string;
  jalali_date: string;
  time: string;
}