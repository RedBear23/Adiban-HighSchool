
"use client";

import { useCallback, useEffect, useState } from "react";

import { getNews } from "@/services/news_services";
import type { News } from "@/types/news";

import { NewsCard } from "./NewsCard";
import { NewsCardSkeleton } from "./NewsCardSkeleton";

export function NewsSection() {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // دریافت اخبار از API
  const loadNews = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);

    try {
      const data = await getNews();
      setNews(data);
    } catch (error) {
      console.error("Failed to load news:", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadNews();
  }, [loadNews]);

  return (
    <section
      dir="rtl"
      className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-7 sm:mb-10">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 shrink-0 rounded-full bg-primary" />

            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              اخبار مدرسه
            </h1>
          </div>

          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            تازه‌ترین اخبار، رویدادها و فعالیت‌های مدرسه ادیبان
          </p>
        </div>

        {/* Loading */}
        {isLoading ? (
          <div
            role="status"
            aria-label="در حال بارگذاری اخبار"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <NewsCardSkeleton key={index} />
            ))}
          </div>
        ) : hasError ? (
          /* Error */
          <div className="rounded-2xl border border-border bg-card px-4 py-12 text-center sm:px-6">
            <p className="text-base font-semibold text-foreground">
              دریافت اخبار با مشکل مواجه شد.
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              لطفاً اتصال اینترنت خود را بررسی کنید و دوباره تلاش کنید.
            </p>

            <button
              type="button"
              onClick={() => void loadNews()}
              className="mt-6 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              تلاش مجدد
            </button>
          </div>
        ) : news.length === 0 ? (
          /* Empty */
          <div className="rounded-xl bg-card px-4 py-12 text-center text-sm text-muted-foreground sm:px-6">
            هنوز خبری منتشر نشده است.
          </div>
        ) : (
          /* News List */
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {news.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
