"use client";

import { useEffect, useState } from "react";

import { getTeachers } from "@/services/teachers_services";
import type { Teacher } from "@/types/teachers";

import { TeacherCard } from "./TeacherCard";

export function TeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadTeachers() {
      try {
        const data = await getTeachers();

        setTeachers(data);
      } finally {
        setIsLoading(false);
      }
    }

    loadTeachers();
  }, []);

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8" dir="rtl">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="mb-10 text-right">
          <h1 className="inline-block max-w-full rounded-full bg-primary p-5 text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            معلمان مدرسه ادیبان
          </h1>

          <div className="mt-4 h-1 w-16 rounded-full bg-primary" />

          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            با معلمان مدرسه ادیبان، تخصص آن‌ها و نقششان در مسیر یادگیری و
            پیشرفت دانش‌آموزان آشنا شوید.
          </p>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="py-16 text-center text-sm text-muted-foreground">
            در حال دریافت اطلاعات معلمان...
          </div>
        ) : (
          /* Teachers Grid */
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((teacher) => (
              <TeacherCard
                key={teacher.id}
                teacher={teacher}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}