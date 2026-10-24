"use client";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import HeroSlide from "./HeroSlide";
import { heroSlides } from "./heroـdata";

export default function HeroSlider() {
  const autoplay = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
    }),
  );

  return (
    <Carousel
      dir="rtl"
      opts={{
        direction: "rtl",
        loop: true,
      }}
      plugins={[autoplay.current]}
      className="w-full"
    >
      <CarouselContent className="ml-0">
        {heroSlides.map((slide) => (
          <CarouselItem key={slide.id} className="pl-0">
            <HeroSlide slide={slide} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="right-4 left-auto border-white/30 bg-black/20 text-white backdrop-blur-sm hover:bg-white hover:text-primary-dark rtl:rotate-0" />

      <CarouselNext className="left-4 right-auto border-white/30 bg-black/20 text-white backdrop-blur-sm hover:bg-white hover:text-primary-dark rtl:rotate-0" />
    </Carousel>
  );
}