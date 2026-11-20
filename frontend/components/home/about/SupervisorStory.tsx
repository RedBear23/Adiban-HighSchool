
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { supervisor_data } from "./about_data";

export function SupervisorStory() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-10 text-center" dir="rtl">
          <span className="text-sm font-medium text-primary">
            معاون مدرسه 
          </span>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            از نگاه معاون مدرسه
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            بخشی از داستان ادیبان را از زبان کسی بشنویم که هر روز در کنار
            دانش‌آموزان حضور دارد.
          </p>
        </div>

        {/* Story Card */}
        <Card className="overflow-hidden rounded-3xl border-0 bg-linear-to-br from-green-soft via-card to-blue-soft shadow-sm">
          <CardContent className="p-5 sm:p-7 lg:p-8">
            <div
              className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12"
              dir="rtl"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden rounded-2xl sm:h-95 lg:h-105">
                <Image
                  src={supervisor_data.image}
                  alt={supervisor_data.name}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/5 to-transparent" />

                {/* Supervisor Info */}
                <div className="absolute bottom-0 right-0 left-0 p-6 text-white">
                  <p className="text-lg font-bold">
                    {supervisor_data.name}
                  </p>

                  <p className="mt-1 text-sm text-white/80">
                    {supervisor_data.role}
                  </p>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center px-1 py-4 text-center sm:px-3 lg:px-4">
                <span
                  aria-hidden="true"
                  className="text-7xl font-serif leading-none text-primary/40 sm:text-8xl"
                >
                  “
                </span>

                <blockquote className="mt-2 text-xl font-semibold leading-10 text-foreground sm:text-2xl sm:leading-[2.2]">
                  {supervisor_data.quote}
                </blockquote>

                <div className="mx-auto my-7 h-1 w-16 rounded-full bg-primary/40" />

                <p className="text-sm leading-8 text-muted-foreground sm:text-base sm:leading-9">
                  {supervisor_data.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
