import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import type { HeroSlideData } from "./hero-data";

interface HeroSlideProps {
  slide: HeroSlideData;
}

export default function HeroSlide({ slide }: HeroSlideProps) {
  return (
    <div className="relative h-107.5 overflow-hidden rounded-b-2xl sm:h-120 lg:h-130">
      <img
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Image overlay */}
      <div className="absolute inset-0 bg-linear-to-l from-black/70 via-black/35 to-black/10" />

      {/* Content */}
      <div className="relative flex h-full items-center">
        <div className="max-w-2xl px-6 text-right text-white sm:px-10 lg:px-14">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {slide.title}
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
            {slide.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
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
                  "border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary-dark",
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