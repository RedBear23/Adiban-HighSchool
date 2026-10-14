import { Card, CardContent } from "@/components/ui/card";
import { supervisor_data } from "./about_data";

export function SupervisorStory() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-10 text-center" dir="rtl">
          <span className="text-sm font-medium text-primary">
            روایت اول
          </span>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            از نگاه ناظم مدرسه
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            بخشی از داستان ادیبان را از زبان کسی بشنویم که هر روز در کنار
            دانش‌آموزان حضور دارد.
          </p>
        </div>

        {/* Story Card */}
        <Card className="overflow-hidden rounded-3xl border-0 bg-linear-to-br from-green-soft via-card to-blue-soft shadow-sm">
          <CardContent className="p-0">
            <div
              className="grid items-stretch lg:grid-cols-[0.85fr_1.15fr]"
              dir="rtl"
            >
              {/* Image */}
              <div className="relative min-h-80 overflow-hidden lg:min-h-107.5">
                <img
                  src={supervisor_data.image}
                  alt={supervisor_data.name}
                  className="absolute inset-0 h-full w-full object-cover rounded-bl-2xl rounded-tl-2xl"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute bottom-6 right-6 text-white">
                  <p className="text-lg font-bold">
                    {supervisor_data.name}
                  </p>

                  <p className="mt-1 text-sm text-white/80">
                    {supervisor_data.role}
                  </p>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14">
                <span className="text-4xl leading-none text-primary/40">
                  “
                </span>

                <blockquote className="mt-2 text-xl font-semibold leading-9 text-foreground sm:text-2xl">
                  {supervisor_data.quote}
                </blockquote>

                <div className="my-7 h-px w-20 bg-primary/30" />

                <p className="text-base leading-8 text-muted-foreground">
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