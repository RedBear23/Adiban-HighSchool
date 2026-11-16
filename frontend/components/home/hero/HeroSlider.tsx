
"use client";

import Autoplay from "embla-carousel-autoplay";
import { useEffect, useMemo, useState } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import HeroSlide from "./HeroSlide";
import { heroSlides } from "./hero_data";

export default function HeroSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  // ساخت نمونه Autoplay با فاصله زمانی ۱۰ ثانیه
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 10000,
        stopOnInteraction: false,
      }),
    [],
  );

  // هماهنگ نگه داشتن نقطه فعال با اسلاید فعلی
  useEffect(() => {
    if (!api) return;

    const updateActiveIndex = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    updateActiveIndex();

    api.on("select", updateActiveIndex);
    api.on("reInit", updateActiveIndex);

    return () => {
      api.off("select", updateActiveIndex);
      api.off("reInit", updateActiveIndex);
    };
  }, [api]);

  return (
    <Carousel
      dir="rtl"
      setApi={setApi}
      opts={{
        direction: "rtl",
        loop: true,
      }}
      plugins={[autoplay]}
      className="w-full"
    >
      <CarouselContent className="ml-0">
        {heroSlides.map((slide) => (
          <CarouselItem key={slide.id} className="pl-0">
            <HeroSlide slide={slide} />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* دکمه‌های جابه‌جایی */}
      <CarouselPrevious
        aria-label="تصویر قبلی"
        className="right-4 left-auto border-white/30 bg-black/25 text-white shadow-sm backdrop-blur-md hover:border-white hover:bg-white hover:text-primary-dark sm:right-6"
      />

      <CarouselNext
        aria-label="تصویر بعدی"
        className="left-4 right-auto border-white/30 bg-black/25 text-white shadow-sm backdrop-blur-md hover:border-white hover:bg-white hover:text-primary-dark sm:left-6"
      />

      {/* انتخاب مستقیم تصویر */}
      <div
        role="group"
        aria-label="انتخاب تصویر"
        className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2"
      >
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`رفتن به تصویر ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
            onClick={() => api?.scrollTo(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-7 bg-primary"
                : "w-2.5 bg-white/65 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </Carousel>
  );
}
