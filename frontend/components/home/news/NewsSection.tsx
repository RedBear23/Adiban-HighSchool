"use client";

import { useEffect, useState } from "react";

import { getNews } from "@/services/news_services";
import type { News } from "@/types/news";

import { NewsCard } from "./NewsCard";

export function NewsSection() {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const data = await getNews();
        setNews(data);
      } finally {
        setIsLoading(false);
      }
    }

    loadNews();
  }, []);

  return (
    <section
      dir="rtl"
      className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-7 sm:mb-10">
          <h1 className="inline-block rounded-full bg-primary px-5 py-2.5 text-2xl font-bold text-primary-foreground sm:px-7 sm:py-4 sm:text-4xl">
            اخبار مدرسه
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:mt-4 sm:text-base">
            تازه‌ترین اخبار، رویدادها و فعالیت‌های مدرسه ادیبان
          </p>
        </div>

        {isLoading ? (
          <div className="py-16 text-center text-sm text-muted-foreground">
            در حال دریافت اخبار...
          </div>
        ) : news.length === 0 ? (
          <div className="rounded-xl bg-card px-4 py-12 text-center text-sm text-muted-foreground sm:px-6">
            هنوز خبری منتشر نشده است.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {news.map((item) => (
              <NewsCard
                key={item.id}
                news={item}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}