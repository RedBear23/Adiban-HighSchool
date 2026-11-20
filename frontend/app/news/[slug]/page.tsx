
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { NewsDetail } from "@/components/home/news/NewsDetail";
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

        <Link
          href="/news"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <ArrowRight className="size-4" />
          بازگشت به اخبار
        </Link>
      </div>
    );
  }

  return <NewsDetail news={news} />;
}
