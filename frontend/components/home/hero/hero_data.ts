
export interface HeroSlideData {
  id: number;
  image: string;
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
}

export const heroSlides: HeroSlideData[] = [
  {
    id: 1,
    image: "/hero/slide-1.jpg",
    title: "به دنیای یادگیری ادیبان خوش آمدید",
    description:
      "جایی برای یادگیری، تجربه کردن و ساختن آینده‌ای روشن‌تر؛ همراه با دانش‌آموزانی که هر روز برای رشد و موفقیت قدم برمی‌دارند.",
    primaryAction: {
      label: "آشنایی با مدرسه",
      href: "/about",
    },
    secondaryAction: {
      label: "گالری تصاویر",
      href: "/gallery",
    },
  },
  {
    id: 2,
    image: "/hero/slide-2.jpg",
    title: "یادگیری، رشد، آینده",
    description:
      "در ادیبان، مسیر یادگیری با تجربه، تلاش و خلاقیت همراه است.",
    primaryAction: {
      label: "آخرین اخبار",
      href: "/news",
    },
    secondaryAction: {
      label: "تماس با مدرسه",
      href: "/contact",
    },
  },
  {
    id: 3,
    image: "/hero/slide-3.jpg",
    title: "جامعه‌ای برای رشد",
    description:
      "مدرسه فقط مکانی برای درس خواندن نیست؛ فرصتی برای کشف استعدادها و ساختن تجربه‌های ارزشمند است.",
    primaryAction: {
      label: "کادر مدرسه",
      href: "/teachers",
    },
    secondaryAction: {
      label: "گالری تصاویر",
      href: "/gallery",
    },
  },
];
