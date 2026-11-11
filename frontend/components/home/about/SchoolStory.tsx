import { school_story_data } from "./about_data";

export function SchoolStory() {
  const { images } = school_story_data;

  return (
    <section className="p-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl" dir="rtl">
          {/* Section Heading */}
          <div className="mb-12 overflow-hidden rounded-4xl bg-green-soft px-6 py-8 sm:px-10 sm:py-10">
            <span className="inline-flex rounded-full bg-card px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              زندگی در مدرسه
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              در میان ادیبان
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-8 text-muted-foreground sm:text-base">
              {school_story_data.intro}
            </p>
          </div>

        {/* Main Story */}
        <div className="overflow-hidden rounded-4xl border border-border bg-card shadow-sm">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* Image */}
            <div className="relative min-h-80 overflow-hidden lg:min-h-125">
              <img
                src={images.school.src}
                alt={images.school.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-navy/70 to-transparent" />

              <div className="absolute bottom-6 right-6 left-6">
                <span className="inline-flex rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                  مدرسه ادیبان
                </span>

                <p className="mt-3 max-w-md text-lg font-semibold leading-8 text-white">
                  جایی که هر روز، بخشی تازه از داستان ما نوشته می‌شود.
                </p>
              </div>
            </div>

            {/* Story */}
            <div className="flex flex-col justify-center bg-green-soft px-6 py-10 sm:px-10 lg:px-12">
              <span className="text-sm font-bold text-primary">
                01 / شروع یک روز
              </span>

              <h3 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                هر روز از همین‌جا شروع می‌شود
              </h3>

              <p className="mt-5 text-sm leading-8 text-muted-foreground sm:text-base">
                صبح که درهای مدرسه باز می‌شوند، راهروها و کلاس‌ها دوباره پر از
                زندگی می‌شوند. دانش‌آموزان وارد می‌شوند و یک روز تازه برای
                یادگرفتن، تجربه کردن و ساختن خاطره آغاز می‌شود.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="h-px w-16 bg-primary/30" />
              </div>
            </div>
          </div>
        </div>

        {/* Two Story Cards */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Yard */}
          <article className="overflow-hidden rounded-4xl border border-border bg-card shadow-sm">
            <div className="grid sm:grid-cols-[0.9fr_1.1fr] lg:grid-cols-1">
              <div className="relative h-64 overflow-hidden lg:h-72">
                <img
                  src={images.yard.src}
                  alt={images.yard.alt}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              <div className="bg-blue-soft p-7 sm:flex sm:flex-col sm:justify-center lg:p-8">
                <span className="text-sm font-bold text-secondary-blue">
                  02 / با هم بودن
                </span>

                <h3 className="mt-3 text-xl font-bold text-foreground">
                  جایی برای دوستی‌ها
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  حیاط مدرسه فقط یک فضای خالی نیست؛ جایی است برای گفتگو،
                  خنده، دوستی و ساختن خاطراتی که بخشی از سال‌های مدرسه می‌شوند.
                </p>
              </div>
            </div>
          </article>

          {/* Classroom */}
          <article className="overflow-hidden rounded-4xl border border-border bg-card shadow-sm">
            <div className="grid sm:grid-cols-[1.1fr_0.9fr] lg:grid-cols-1">
              <div className="relative h-64 overflow-hidden lg:h-72">
                <img
                  src={images.classroom.src}
                  alt={images.classroom.alt}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              <div className="bg-secondary p-7 sm:flex sm:flex-col sm:justify-center lg:p-8">
                <span className="text-sm font-bold text-primary">
                  03 / یاد گرفتن
                </span>

                <h3 className="mt-3 text-xl font-bold text-foreground">
                  هر کلاس، یک دنیای تازه
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  پشت در هر کلاس، پرسش‌ها، ایده‌ها و تجربه‌های تازه‌ای شکل
                  می‌گیرند؛ جایی که یادگیری فقط به کتاب محدود نمی‌شود.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Final Story */}
        <div className="mt-6 grid overflow-hidden rounded-4xl border border-border bg-card shadow-sm lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-70 lg:min-h-90">
            <img
              src={images.hallway.src}
              alt={images.hallway.alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          <div className="flex flex-col justify-center bg-blue-soft px-6 py-10 sm:px-10 lg:px-12">
            <span className="text-sm font-bold text-secondary-blue">
              04 / ادامه داستان
            </span>

            <h3 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
              هر روز، یک صفحه‌ی تازه
            </h3>

            <p className="mt-5 text-sm leading-8 text-muted-foreground sm:text-base">
              راهروهایی که هر روز صدای قدم‌های دانش‌آموزان را می‌شنوند و
              کلاس‌هایی که شاهد رشد و تغییر آن‌ها هستند. داستان ادیبان با هر
              روز تازه، ادامه پیدا می‌کند.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-secondary-blue" />
              <span className="h-px w-16 bg-secondary-blue/30" />

            </div>
          </div>
        </div>
                {/* Quote */}
        <div className="mt-6 overflow-hidden rounded-4xl bg-primary px-6 py-12 text-center shadow-sm sm:px-12 sm:py-14">
          <div className="mx-auto max-w-3xl">
            <span className="text-5xl font-serif leading-none text-white/30">
              “
            </span>

            <p className="mt-2 text-2xl font-bold leading-10 text-primary-foreground sm:text-3xl sm:leading-12">
              مدرسه از ساختمان‌ها و کلاس‌ها ساخته نشده؛
              <br className="hidden sm:block" />
              از آدم‌ها و لحظه‌هایی ساخته شده که در آن اتفاق می‌افتند.
            </p>

            <div className="mx-auto mt-7 h-1 w-12 rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}