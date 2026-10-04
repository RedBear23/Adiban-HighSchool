import Link from "next/link";

import { TeacherCard } from "./TeacherCard";
import { teachers } from "./teacher_data";

export function TeachersSection() {
  return (
    <section className="py-16" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-sm font-medium text-primary">
              کادر آموزشی
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              معلمان مدرسه
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              با بخشی از معلمان و کادر آموزشی مدرسه ادیبان آشنا شوید.
            </p>
          </div>

          <Link
            href="/teachers"
            className="hidden shrink-0 text-sm font-medium text-primary transition-colors hover:text-primary-hover sm:block"
          >
            مشاهده همه معلمان
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.slice(0, 9).map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="/teachers"
            className="text-sm font-medium text-primary transition-colors hover:text-primary-hover"
          >
            مشاهده همه معلمان
          </Link>
        </div>
      </div>
    </section>
  );
}