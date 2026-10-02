"use client";

import { motion } from "motion/react";

import StatisticsCard from "./StatisticsCard";
import { statistics } from "./statistics-data";

export default function Statistics() {
  return (
    <section className="px-4 py-6  sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 text-right">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold text-primary"
          >
            ادیبان در یک نگاه
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl"
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((statistic, index) => (
            <motion.div
              key={statistic.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
            >
              <StatisticsCard statistic={statistic} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}