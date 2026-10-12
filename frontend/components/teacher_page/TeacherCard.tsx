import type { Teacher } from "../teachers_section/teacher_data";

type TeacherCardProps = {
  teacher: Teacher;
  imageOnRight: boolean;
};

export function TeacherCard({
  teacher,
  imageOnRight,
}: TeacherCardProps) {
  return (
    <article className="relative overflow-hidden rounded-3xl bg-linear-to-br from-green-soft via-card to-blue-soft px-5 py-5 shadow-sm sm:px-8 sm:py-6 lg:px-10 lg:py-7">
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className={`absolute -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl ${
          imageOnRight ? "-left-20" : "-right-20"
        }`}
      />

      <div
        dir="ltr"
        className={`relative grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 ${
          imageOnRight ? "" : "lg:[&>*:first-child]:order-2"
        }`}
      >
        {/* Teacher Image */}
        <div className="relative mx-auto w-full max-w-xs">
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -left-3 h-16 w-16 rounded-2xl bg-secondary-blue/20"
          />

          <div
            aria-hidden="true"
            className="absolute -right-3 -top-3 h-16 w-16 rounded-2xl bg-primary/20"
          />

          <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border bg-card shadow-md">
            <img
              src={teacher.image}
              alt={teacher.name}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Teacher Information */}
        <div dir="rtl" className="text-right">
          <div className="mb-3 flex items-center justify-end gap-3">
            <span className="text-sm font-medium text-secondary-blue">
              کادر آموزشی ادیبان
            </span>

            <span className="h-px w-10 bg-primary" />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl">
            {teacher.name}
          </h2>

          <p className="mt-1 text-base font-medium text-primary">
            {teacher.subject}
          </p>

          <div className="my-4 h-px w-full bg-border" />

          <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            {teacher.description}
          </p>

          {/* Description Highlight */}
          <div className="mt-5 rounded-2xl border-r-4 border-primary bg-card/80 px-4 py-3 shadow-sm">
            <p className="text-sm leading-6 text-dark sm:text-base sm:leading-7">
              بخشی از تلاش کادر آموزشی مدرسه، همراهی با دانش‌آموزان در مسیر
              یادگیری و رشد علمی آن‌هاست.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}