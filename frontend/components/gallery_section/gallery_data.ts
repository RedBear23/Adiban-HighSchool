
export type GalleryCategory =
  | "school"
  | "activities"
  | "events";

export type GalleryImage = {
  id: number;
  title: string;
  category: GalleryCategory;
  image: string;
  description: string;
};

export const gallery_categories = [
  { label: "همه تصاویر", value: "all" },
  { label: "محیط مدرسه", value: "school" },
  { label: "فعالیت‌ها", value: "activities" },
  { label: "مراسم‌ها", value: "events" },
] as const;

export const gallery_images: GalleryImage[] = [
  {
    id: 1,
    title: "فضای آموزشی مدرسه",
    category: "school",
    image:
      "/hero/slide-1.jpg",
    description: "نگاهی به فضای آموزشی و محیط مدرسه",
  },
  {
    id: 2,
    title: "یادگیری در کنار یکدیگر",
    category: "activities",
    image:
      "/hero/slide-1.jpg",
    description: "لحظاتی از فعالیت‌های آموزشی دانش‌آموزان",
  },
  {
    id: 3,
    title: "محیط مدرسه",
    category: "school",
    image:
      "/hero/slide-1.jpg",
    description: "محیطی برای رشد و یادگیری",
  },
  {
    id: 4,
    title: "فعالیت‌های دانش‌آموزی",
    category: "activities",
    image:
      "/hero/slide-1.jpg",
    description: "تجربه‌های مشترک در مسیر یادگیری",
  },
  {
    id: 5,
    title: "روزهای خاطره‌انگیز",
    category: "events",
    image:
      "/hero/slide-1.jpg",
    description: "ثبت لحظات به‌یادماندنی دوران مدرسه",
  },
  {
    id: 6,
    title: "کلاس درس",
    category: "school",
    image:
      "/hero/slide-1.jpg",
    description: "فضایی برای پرسیدن، کشف کردن و یاد گرفتن",
  },
  {
    id: 7,
    title: "همراه با دوستان",
    category: "activities",
    image:
      "/hero/slide-1.jpg",
    description: "یادگیری و همکاری در کنار دوستان",
  },
  {
    id: 8,
    title: "خاطرات مدرسه",
    category: "events",
    image:
      "/hero/slide-1.jpg",
    description: "لحظاتی که بخشی از خاطرات ما می‌شوند",
  },
];
