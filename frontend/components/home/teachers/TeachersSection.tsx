
"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";

import { getTeachers } from "@/services/teachers_services";
import type { Teacher } from "@/types/teachers";

import { TeacherCard } from "./TeacherCard";

// شناسه معلمان منتخب و ترتیب نمایش آن‌ها در صفحه اصلی
const FEATURED_TEACHER_IDS: number[] = [];

const FEATURED_TEACHERS_COUNT = 8;

type TeachersSectionProps = {
  featuredOnly?: boolean;
};

function TeachersSkeleton({ compact }: { compact: boolean }) {
  return (
    <div
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4"
    >
      {Array.from({ length: compact ? 8 : 6 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-3xl border border-border bg-card"
        >
          <div className="aspect-3/4 animate-pulse rounded-xl bg-muted" />

          <div className="space-y-3 p-3 sm:p-5">
            <div className="h-4 w-2/3 animate-pulse rounded-full bg-muted" />
            <div className="h-3 w-1/2 animate-pulse rounded-full bg-muted" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function TeachersSection({
  featuredOnly = false,
}: TeachersSectionProps) {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const loadTeachers = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);

    try {
      const data = await getTeachers();
      setTeachers(data);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadTeachers();
  }, [loadTeachers]);

  const featuredTeachers =
    FEATURED_TEACHER_IDS.length > 0
      ? FEATURED_TEACHER_IDS.map((id) =>
          teachers.find((teacher) => teacher.id === id),
        ).filter((teacher): teacher is Teacher => Boolean(teacher))
      : teachers.slice(0, FEATURED_TEACHERS_COUNT);

  const displayedTeachers = featuredOnly ? featuredTeachers : teachers;

  return (
    <section
      className="px-4 py-10 sm:px-6 lg:px-8"
      dir="rtl"
      id="teachers"
    >
      <div className="mx-auto max-w-6xl">
        {/* عنوان بخش */}
        <div className="mb-10 text-right">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 shrink-0 rounded-full bg-primary" />

            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              معلمان مدرسه ادیبان
            </h2>
          </div>

          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            با معلمان مدرسه ادیبان، تخصص آن‌ها و نقششان در مسیر یادگیری و
            پیشرفت دانش‌آموزان آشنا شوید.
          </p>
        </div>

        {/* وضعیت بارگذاری */}
        {isLoading && (
          <TeachersSkeleton compact={featuredOnly} />
        )}

        {/* وضعیت خطا */}
        {!isLoading && hasError && (
          <div
            role="alert"
            className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card px-5 py-12 text-center"
          >
            <p className="text-base font-medium text-foreground">
              دریافت اطلاعات معلمان با مشکل مواجه شد.
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              لطفاً اتصال اینترنت خود را بررسی کنید و دوباره تلاش کنید.
            </p>

            <button
              type="button"
              onClick={() => void loadTeachers()}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <RefreshCw className="size-4" />
              تلاش مجدد
            </button>
          </div>
        )}

        {/* وضعیت خالی */}
        {!isLoading && !hasError && displayedTeachers.length === 0 && (
          <div className="rounded-2xl border border-border bg-card px-5 py-12 text-center">
            <p className="font-medium text-foreground">
              در حال حاضر اطلاعاتی برای نمایش وجود ندارد.
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              به‌زودی اطلاعات معلمان در این بخش قرار می‌گیرد.
            </p>
          </div>
        )}

        {/* فهرست معلمان */}
        {!isLoading && !hasError && displayedTeachers.length > 0 && (
          <>
            <div
              className={`grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6`}
            >
              {displayedTeachers.map((teacher) => (
                <TeacherCard
                  key={teacher.id}
                  teacher={teacher}
                  compact={featuredOnly}
                />
              ))}
            </div>

            {/* لینک مشاهده تمام معلمان */}
            {featuredOnly && (
              <div className="mt-8 flex justify-center">
                <Link
                  href="/teachers"
                  className="group inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary/40 hover:bg-primary/10"
                >
                  مشاهده تمام معلمان

                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
