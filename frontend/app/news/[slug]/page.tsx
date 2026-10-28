"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { NewsDetail } from "@/components/news/NewsDetail";
import { getNewsBySlug } from "@/services/news_services";
import type { News } from "@/types/news";

export default function NewsDetailPage() {
  const params = useParams<{ slug: string }>();

  const [news, setNews] = useState<News | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function loadNews() {
      try {
        setIsLoading(true);
        setHasError(false);

        const slug = decodeURIComponent(params.slug);

        const data = await getNewsBySlug(slug);

        setNews(data);
      } catch (error) {
        console.error("Failed to load news:", error);

        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadNews();
  }, [params.slug]);

  if (isLoading) {
    return (
      <div
        dir="rtl"
        className="px-4 py-24 text-center text-sm text-muted-foreground"
      >
        در حال دریافت خبر...
      </div>
    );
  }

  if (hasError || !news) {
    return (
      <div
        dir="rtl"
        className="px-4 py-24 text-center"
      >
        <h1 className="text-2xl font-bold text-foreground">
          خبر پیدا نشد
        </h1>

        <p className="mt-3 text-sm text-muted-foreground">
          خبر موردنظر وجود ندارد یا حذف شده است.
        </p>
      </div>
    );
  }

  return <NewsDetail news={news} />;
}