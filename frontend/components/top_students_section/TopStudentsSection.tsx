"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { top_students_data } from "./top_students_data";

export function TopStudentsSection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-8 text-right">

          <h2 className="mt-2 inline-block max-w-full rounded-full bg-primary px-6 py-3 text-3xl font-bold tracking-tight text-foreground sm:px-7 sm:py-4 sm:text-4xl">
            دانش‌آموزان ممتاز
          </h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        {/* Students Slider */}
        <div className="relative rounded-3xl bg-linear-to-br from-green-soft via-card to-blue-soft px-10 py-8 sm:px-14 sm:py-10">
          <Carousel
            opts={{
              align: "start",
              direction: "rtl",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {top_students_data.map((student) => (
                <CarouselItem
                  key={student.name}
                  className="pl-4 sm:basis-1/2 lg:basis-1/3"
                >
                  <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-md">
                    {/* Student Image */}
                    <div className="aspect-4/3 overflow-hidden bg-muted">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    {/* Student Information */}
                    <div className="p-5 text-right">
                      <h3 className="text-xl font-bold text-dark">
                        {student.name}
                      </h3>

                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="rounded-xl bg-green-soft px-3 py-2">
                          <p className="text-xs text-muted-foreground">
                            معدل
                          </p>

                          <p className="mt-1 text-lg font-bold text-primary">
                            {student.score}
                          </p>
                        </div>

                        <div className="rounded-xl bg-blue-soft px-3 py-2">
                          <p className="text-xs text-muted-foreground">
                            پایه
                          </p>

                          <p className="mt-1 text-sm font-semibold text-blue-dark">
                            {student.grade}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 rounded-xl bg-secondary px-3 py-3">
                        <p className="text-xs text-muted-foreground">
                          رشته تحصیلی
                        </p>

                        <p className="mt-1 text-sm font-semibold text-dark">
                          {student.field}
                        </p>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselNext className="right-auto left-0" />
            <CarouselPrevious className="right-0 left-auto" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}