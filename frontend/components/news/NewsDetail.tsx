import {
  CalendarDays,
  Clock,
  UserRound,
  Newspaper,
} from "lucide-react";

import type { News } from "@/types/news";

type NewsDetailProps = {
  news: News;
};

export function NewsDetail({ news }: NewsDetailProps) {
  const authorName = [
    news.author.first_name,
    news.author.last_name,
  ]
    .filter(Boolean)
    .join(" ");

  const hasImage = Boolean(news.image?.trim());

  return (
    <article
      dir="rtl"
      className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-green-soft px-3 py-1 text-xs font-medium text-primary">
              اخبار مدرسه
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-12 text-foreground sm:text-4xl sm:leading-14">
            {news.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              {news.author.profile_picture ? (
                <img
                  src={news.author.profile_picture}
                  alt={authorName}
                  className="size-9 rounded-full object-cover"
                />
              ) : (
                <div className="flex size-9 items-center justify-center rounded-full bg-blue-soft text-secondary-blue">
                  <UserRound className="size-4" />
                </div>
              )}

              <span>{authorName}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <CalendarDays className="size-4 text-primary" />
              <time dateTime={news.date}>
                {news.date}
              </time>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="size-4 text-secondary-blue" />
              <time dateTime={news.time}>
                {news.time.slice(0, 5)}
              </time>
            </div>
          </div>
        </header>

        {/* Image / No Image */}
        {hasImage ? (
          <div className="overflow-hidden rounded-2xl bg-card">
            <img
              src={news.image}
              alt={news.title}
              className="aspect-video w-full object-cover"
            />
          </div>
        ) : (
          <div className="flex min-h-64 flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl border border-border bg-card px-6 py-12 text-center sm:min-h-80 sm:py-16">
            <div className="flex size-20 items-center justify-center rounded-3xl bg-green-soft text-primary">
              <Newspaper className="size-10" />
            </div>

            <div className="max-w-xl">
              <span className="text-sm font-medium text-primary">
                اخبار مدرسه ادیبان
              </span>

              <h2 className="mt-3 text-xl font-bold leading-9 text-card-foreground sm:text-2xl">
                {news.title}
              </h2>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="mt-8 rounded-2xl bg-card p-6 sm:p-8">
          <p className="whitespace-pre-line text-base leading-9 text-card-foreground sm:text-lg">
            {news.descriptions}
          </p>
        </div>
      </div>
    </article>
  );
}
