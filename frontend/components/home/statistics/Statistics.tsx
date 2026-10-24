"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

import StatisticsCard from "./StatisticsCard";

import { getStatistics } from "@/services/statistics_services";
import type { Statistics as StatisticsData } from "@/types/statistics";

export default function Statistics() {
  const [statistics, setStatistics] =
    useState<StatisticsData | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStatistics() {
      try {
        const data = await getStatistics();

        setStatistics(data);
      } finally {
        setIsLoading(false);
      }
    }

    loadStatistics();
  }, []);

  return (
    <section
      className="px-4 py-6 sm:px-6 lg:px-8"
      id="statistics"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 text-right">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold text-primary"
          />

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="inline-block max-w-full rounded-full bg-primary px-6 py-3 text-3xl font-bold tracking-tight text-foreground sm:px-7 sm:py-4 sm:text-4xl"
          >
            آمار کل مدرسه ادیبان
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-3 max-w-2xl text-sm leading-7 text-gray sm:text-base"
          >
            نگاهی کوتاه به جامعه آموزشی ادیبان و افرادی که هر روز در آن
            یاد می‌گیرند، آموزش می‌دهند و رشد می‌کنند.
          </motion.p>
        </div>

        {/* Statistics */}
        {isLoading ? (
          <div className="py-12 text-center text-sm text-muted-foreground">
            در حال دریافت آمار مدرسه...
          </div>
        ) : statistics ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
            >
              <StatisticsCard
                label="معلمان"
                value={statistics.teachers_count}
                description="تعداد معلمان مدرسه ادیبان"
                color="green"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <StatisticsCard
                label="دانش‌آموزان"
                value={statistics.students_count}
                description="تعداد دانش‌آموزان مدرسه ادیبان"
                color="blue"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.16 }}
            >
              <StatisticsCard
                label="کلاس‌ها"
                value={statistics.classes_count}
                description="تعداد کلاس‌های فعال مدرسه"
                color="green"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.24 }}
            >
              <StatisticsCard
                label="رشته‌های تحصیلی"
                value={statistics.major_count}
                description="رشته‌های تحصیلی ارائه‌شده در مدرسه"
                color="blue"
              />
            </motion.div>
          </div>
        ) : null}
      </div>
    </section>
  );
}