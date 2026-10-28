import Link from "next/link";
import { CalendarDays } from "lucide-react";

import type { News } from "@/types/news";

type NewsCardProps = {
  news: News;
};

export function NewsCard({ news }: NewsCardProps) {
  const authorName = [
    news.author.first_name,
    news.author.last_name,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link
      href={`/news/${news.slug}`}
      className="group block h-full min-w-0"
    >
      <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl bg-card shadow-sm transition-shadow hover:shadow-md">
        {/* Image */}
        <div className="relative aspect-video shrink-0 overflow-hidden sm:aspect-4/3">
          <img
            src={news.image}
            alt={news.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <h2 className="line-clamp-2 text-base font-bold leading-7 text-card-foreground sm:text-lg sm:leading-8">
            {news.title}
          </h2>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground sm:mt-3 sm:leading-7">
            {news.descriptions}
          </p>

          {/* Author / Date */}
          <div className="mt-auto pt-4 sm:pt-5">
            <div className="flex min-w-0 items-center justify-between gap-3 border-t border-border pt-4">
              {/* Author */}
              <div className="flex min-w-0 flex-1 items-center gap-2">
                {news.author.profile_picture ? (
                  <img
                    src={news.author.profile_picture}
                    alt={authorName}
                    className="size-8 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-green-soft text-xs font-semibold text-primary">
                    {news.author.first_name?.[0]}
                    {news.author.last_name?.[0]}
                  </div>
                )}

                <span className="min-w-0 truncate text-xs font-medium text-foreground sm:text-sm">
                  {authorName}
                </span>
              </div>

              {/* Date */}
              <div className="flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground">
                <CalendarDays className="size-4 shrink-0 text-secondary-blue" />

                <time
                  dateTime={news.date}
                  dir="ltr"
                  className="whitespace-nowrap"
                >
                  {news.jalali_date}
                </time>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}