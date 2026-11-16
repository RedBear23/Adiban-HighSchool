
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import type { HeroSlideData } from "./hero_data";

interface HeroSlideProps {
  slide: HeroSlideData;
}

export default function HeroSlide({ slide }: HeroSlideProps) {
  return (
    <div className="relative h-105 overflow-hidden rounded-b-2xl sm:h-120 lg:h-130">
      {/* تصویر پس‌زمینه */}
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        unoptimized
        sizes="100vw"
        className="object-cover"
      />

      {/* گرادیان برای خوانایی محتوا */}
      <div className="absolute inset-0 bg-linear-to-l from-black/75 via-black/40 to-black/10" />

      {/* محتوای اسلاید */}
      <div className="relative flex h-full items-center">
        <div className="max-w-2xl px-6 pb-10 text-right text-white sm:px-10 lg:px-14">
          <h1 className="text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            {slide.title}
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
            {slide.description}
          </p>

          {/* دکمه‌های هدایت */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={slide.primaryAction.href}
              className={buttonVariants({
                size: "lg",
                className: "bg-primary hover:bg-primary-hover",
              })}
            >
              {slide.primaryAction.label}
            </Link>

            <Link
              href={slide.secondaryAction.href}
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className:
                  "border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary-dark",
              })}
            >
              {slide.secondaryAction.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
