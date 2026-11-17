
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import { top_students_data } from "./top_students_data";

export function TopStudentsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnapCount, setScrollSnapCount] = useState(0);

  // همگام‌سازی نشانگرها با وضعیت Carousel
  useEffect(() => {
    if (!api) return;

    const updateCarouselState = () => {
      setSelectedIndex(api.selectedScrollSnap());
      setScrollSnapCount(api.scrollSnapList().length);
    };

    updateCarouselState();

    api.on("select", updateCarouselState);
    api.on("reInit", updateCarouselState);

    return () => {
      api.off("select", updateCarouselState);
      api.off("reInit", updateCarouselState);
    };
  }, [api]);

  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8" id="students">
      <div className="mx-auto max-w-6xl">
        {/* عنوان بخش */}
        <div className="mb-7 flex items-center gap-3">
          <div className="h-1 w-12 shrink-0 rounded-full bg-primary" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            دانش‌آموزان ممتاز
          </h2>
        </div>

        {/* محتوای اصلی */}
        <div className="rounded-3xl bg-linear-to-br from-green-soft via-card to-blue-soft px-10 py-7 shadow-sm sm:px-14 sm:py-9">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              direction: "rtl",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {top_students_data.map((student) => (
                <CarouselItem
                  key={student.name}
                  className="sm:basis-1/2 lg:basis-1/3"
                >
                  <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-md">
                    {/* تصویر دانش‌آموز */}
                    <div className="relative aspect-4/3 overflow-hidden bg-muted">
                      <Image
                        src={student.image}
                        alt={student.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        unoptimized
                        className="object-cover transition-transform duration-500 motion-reduce:transition-none md:group-hover:scale-105"
                      />
                    </div>

                    {/* اطلاعات دانش‌آموز */}
                    <div className="p-4 sm:p-5">
                      <h3 className="text-lg font-bold text-card-foreground sm:text-xl">
                        {student.name}
                      </h3>

                        {/* معدل */}
                        <div className="mt-4 flex items-center justify-between rounded-xl bg-accent/10 px-4 py-3">
                          <span className="text-sm text-muted-foreground">
                            معدل تحصیلی
                          </span>

                          <span className="text-xl font-bold tabular-nums text-accent">
                            {student.score}
                          </span>
                        </div>

                        {/* اطلاعات تکمیلی */}
                        <div className="mt-4 flex items-center justify-between gap-3">
                          {/* پایه تحصیلی */}
                          <span className="text-sm text-muted-foreground">
                            پایه:
                            <span className="mr-1 font-semibold text-foreground">
                              {student.grade}
                            </span>
                          </span>

                          {/* رشته تحصیلی */}
                          <span className="shrink-0 rounded-lg border border-accent/15 bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent">
                            {student.field}
                          </span>
                        </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* کنترل‌های Carousel */}
            <CarouselNext className="right-auto left-0" />
            <CarouselPrevious className="right-0 left-auto" />
          </Carousel>

          {/* نشانگر موقعیت اسلایدها */}
          {scrollSnapCount > 1 && (
            <div
              className="mt-7 flex items-center justify-center gap-2"
              dir="ltr"
              aria-label="موقعیت اسلایدها"
            >
              {Array.from({ length: scrollSnapCount }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`رفتن به اسلاید ${index + 1}`}
                  aria-current={selectedIndex === index ? "true" : undefined}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    selectedIndex === index
                      ? "w-7 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
