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
    image: "/images/hero/slide-1.png",
    title: "به مدرسه ادیبان خوش آمدید",
    description:
      "محیطی برای یادگیری، رشد و ساختن آینده‌ای بهتر.",
    primaryAction: {
      label: "درباره مدرسه",
      href: "/about",
    },
    secondaryAction: {
      label: "مشاهده اخبار",
      href: "/news",
    },
  },
  {
    id: 2,
    image: "/images/hero/slide-2.png",
    title: "یادگیری، رشد، آینده",
    description:
      "در ادیبان، مسیر یادگیری با تجربه و خلاقیت همراه است.",
    primaryAction: {
      label: "درباره مدرسه",
      href: "/about",
    },
    secondaryAction: {
      label: "مشاهده رویدادها",
      href: "/events",
    },
  },
  {
    id: 3,
    image: "/images/hero/slide-3.png",
    title: "جامعه‌ای برای رشد",
    description:
      "مدرسه فقط یک مکان برای درس خواندن نیست.",
    primaryAction: {
      label: "کادر مدرسه",
      href: "/teachers",
    },
    secondaryAction: {
      label: "گالری",
      href: "/gallery",
    },
  },
];