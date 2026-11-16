
"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  RefreshCw,
  GraduationCap,
  Users,
  School,
  BookOpen,
} from "lucide-react";

import StatisticsCard from "./StatisticsCard";

import { getStatistics } from "@/services/statistics_services";
import type { Statistics as StatisticsData } from "@/types/statistics";

export default function Statistics() {
  const [statistics, setStatistics] =
    useState<StatisticsData | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const loadStatistics = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);

    try {
      const data = await getStatistics();
      setStatistics(data);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadStatistics();
  }, [loadStatistics]);

  const statisticsItems = statistics
    ? [
        {
          id: "teachers",
          label: "معلمان",
          value: statistics.teachers_count,
          description: "تعداد معلمان مدرسه ادیبان",
          icon: GraduationCap,
          color: "green" as const,
        },
        {
          id: "students",
          label: "دانش‌آموزان",
          value: statistics.students_count,
          description: "تعداد دانش‌آموزان مدرسه ادیبان",
          icon: Users,
          color: "blue" as const,
        },
        {
          id: "classes",
          label: "کلاس‌ها",
          value: statistics.classes_count,
          description: "تعداد کلاس‌های فعال مدرسه",
          icon: School,
          color: "green" as const,
        },
        {
          id: "majors",
          label: "رشته‌های تحصیلی",
          value: statistics.major_count,
          description: "رشته‌های تحصیلی ارائه‌شده در مدرسه",
          icon: BookOpen,
          color: "blue" as const,
        },
      ]
    : [];

  return (
    <section
      className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
      id="statistics"
    >
      <div className="mx-auto max-w-7xl">
        {/* عنوان بخش */}
        <div className="mb-8 text-right sm:mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-1 w-12 shrink-0 rounded-full bg-primary" />

            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              آمار کل مدرسه ادیبان
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-gray sm:text-base">
            نگاهی کوتاه به جامعه آموزشی ادیبان و افرادی که هر روز در آن
            یاد می‌گیرند، آموزش می‌دهند و رشد می‌کنند.
          </p>
        </div>

        {/* وضعیت بارگذاری */}
        {isLoading && (
          <div
            className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
            role="status"
            aria-label="در حال دریافت آمار مدرسه"
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="min-w-0 animate-pulse rounded-2xl border border-border bg-white p-4 sm:p-6"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="h-10 w-10 rounded-xl bg-gray-200 sm:h-12 sm:w-12" />
                  <div className="h-7 w-12 rounded-lg bg-gray-200 sm:h-9 sm:w-16" />
                </div>

                <div className="mt-5 space-y-3 sm:mt-7">
                  <div className="h-5 w-20 rounded-md bg-gray-200 sm:w-28" />
                  <div className="h-4 w-full max-w-36 rounded-md bg-gray-200" />
                </div>
              </div>
            ))}

            <span className="sr-only">
              در حال دریافت آمار مدرسه...
            </span>
          </div>
        )}

        {/* وضعیت خطا */}
        {!isLoading && hasError && (
          <div
            className="flex flex-col items-center justify-center rounded-2xl border border-border bg-white px-6 py-10 text-center"
            role="alert"
          >
            <p className="font-semibold text-navy">
              دریافت آمار مدرسه با مشکل مواجه شد.
            </p>

            <p className="mt-2 text-sm text-gray">
              لطفاً دوباره تلاش کنید.
            </p>

            <button
              type="button"
              onClick={() => void loadStatistics()}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <RefreshCw className="h-4 w-4" />
              تلاش مجدد
            </button>
          </div>
        )}

        {/* کارت‌های آمار */}
        {!isLoading && !hasError && statistics && (
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {statisticsItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="min-w-0"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <StatisticsCard
                  label={item.label}
                  value={item.value}
                  description={item.description}
                  icon={item.icon}
                  color={item.color}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
