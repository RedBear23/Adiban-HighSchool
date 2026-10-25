export function ContactImages() {
  return (
    <div className="relative mx-auto w-full max-w-xl pb-14 sm:pb-16">
      {/* School Image */}
      <div className="overflow-hidden rounded-3xl shadow-sm">
        <img
          src="/about/school-building.jpg"
          alt="ساختمان مدرسه ادیبان"
          className="h-72 w-full object-cover sm:h-80 lg:h-96"
        />

        {/* Soft Overlay */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 rounded-t-3xl bg-linear-to-b from-black/15 to-transparent" />
      </div>

      {/* Supervisor Card */}
      <div className="absolute -bottom-2 left-5 flex items-center gap-4 rounded-2xl bg-card p-3 pl-5 shadow-lg sm:left-8 sm:p-4 sm:pl-6">
        <div className="size-20 shrink-0 overflow-hidden rounded-2xl sm:size-24">
          <img
            src="/teachers/supervisor.jpg"
            alt="ناظم مدرسه ادیبان"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <span className="text-xs font-medium text-primary">
            ناظم مدرسه
          </span>

          <p className="mt-1 font-bold text-foreground">
            مدرسه ادیبان
          </p>

          <p className="mt-1 max-w-44 text-xs leading-5 text-muted-foreground">
            برای هماهنگی و پیگیری امور مدرسه
          </p>
        </div>
      </div>

      {/* Decorative Shape */}
      <div className="absolute -right-3 -top-3 -z-10 size-24 rounded-3xl bg-primary/10" />
    </div>
  );
}