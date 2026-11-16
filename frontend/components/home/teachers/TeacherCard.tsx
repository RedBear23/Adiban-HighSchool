
import Image from "next/image";

import type { Teacher } from "@/types/teachers";

type TeacherCardProps = {
  teacher: Teacher;
  compact?: boolean;
};

export function TeacherCard({
  teacher,
  compact = false,
}: TeacherCardProps) {
  const fullName = [teacher.first_name, teacher.last_name]
    .filter(Boolean)
    .join(" ");

  const subjects = teacher.subjects.join("، ");

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-3xl">
      {/* تصویر معلم */}
      <div className="relative aspect-3/4 overflow-hidden bg-muted">
        <Image
          src={teacher.image}
          alt={fullName || "معلم مدرسه ادیبان"}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-dark/40 to-transparent" />
      </div>

      {/* اطلاعات معلم */}
      <div className="flex flex-1 flex-col items-center p-4 text-center sm:p-5">
        {/* نام معلم */}
        <h2
          className={`w-full font-bold tracking-tight text-card-foreground ${
            compact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
          }`}
        >
          استاد {fullName}
        </h2>

        {/* دروس تدریس */}
       <div className="mt-3 flex flex-row flex-nowrap items-center justify-center gap-2">
          {teacher.subjects.map((subject) => (
            <span
              key={subject}
              className="shrink-0 rounded-lg bg-blue-soft px-3 py-1.5 text-xs font-medium text-blue-dark sm:text-sm"
            >
              {subject}
            </span>
          ))}
        </div>

        {/* توضیحات معلم */}
        {!compact && teacher.short_description && (
          <p className="mt-4 line-clamp-3 text-sm leading-7 text-muted-foreground">
            {teacher.short_description}
          </p>
        )}
      </div>
    </article>
  );
}
