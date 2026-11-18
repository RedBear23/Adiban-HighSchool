
import Image from "next/image";
import { GraduationCap, MapPin } from "lucide-react";

export function AboutHero() {
  return (
    <section
      dir="rtl"
      className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* معرفی مدرسه */}
        <div className="flex flex-col items-start">
          <span className="mb-5 text-sm font-semibold tracking-wide text-primary">
            درباره ادیبان
          </span>

          <h1 className="max-w-xl text-3xl font-extrabold leading-[1.7] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            با ادیبان بیشتر آشنا شوید.
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-8 text-muted-foreground sm:text-base sm:leading-9">
            مدرسه ادیبان، واقع در شهر اهواز، میزبان دانش‌آموزان پایه‌های هفتم
            تا دوازدهم است. در این صفحه با مدرسه، فضای آموزشی و اعضای مجموعه
            ادیبان بیشتر آشنا می‌شوید.
          </p>

          {/* اطلاعات مدرسه */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-border pt-6">
            <div className="flex items-center gap-2.5">
              <MapPin className="size-5 text-primary" />
              <span className="text-sm font-medium text-foreground">
                اهواز، خوزستان
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <GraduationCap className="size-5 text-primary" />
              <span className="text-sm font-medium text-foreground">
                پایه هفتم تا دوازدهم
              </span>
            </div>
          </div>
        </div>

        {/* تصویر ساختمان مدرسه */}
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-muted sm:aspect-5/4 lg:aspect-4/5">
          <Image
            src="/about/school-building.jpg"
            alt="نمای ساختمان مدرسه ادیبان"
            fill
            unoptimized
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
