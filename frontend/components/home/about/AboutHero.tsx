export function AboutHero() {
  return (
    <section className="px-4 pt-6 sm:px-6 lg:px-8">
      <div className="relative mx-auto h-105 max-w-7xl overflow-hidden rounded-3xl sm:h-115">
        {/* Background Image */}
        <img
          src="/hero/slide-2.jpg"
          alt="نمای مدرسه ادیبان"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div
          className="absolute inset-0 flex items-center justify-center px-6 text-center"
          dir="rtl"
        >
          <div className="max-w-3xl">

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              داستان مدرسه ادیبان
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              مدرسه فقط یک ساختمان نیست؛ جایی است که دوستی‌ها شکل می‌گیرند،
              تجربه‌ها ساخته می‌شوند و هر روز، بخشی تازه از داستان ما نوشته
              می‌شود.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}