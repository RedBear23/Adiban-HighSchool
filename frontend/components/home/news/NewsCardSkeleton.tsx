
export function NewsCardSkeleton() {
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      {/* Image Skeleton */}
      <div className="aspect-video shrink-0 animate-pulse bg-muted sm:aspect-4/3" />

      {/* Content Skeleton */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Title */}
        <div className="space-y-2">
          <div className="h-5 w-4/5 animate-pulse rounded-md bg-muted" />
          <div className="h-5 w-2/3 animate-pulse rounded-md bg-muted" />
        </div>

        {/* Description */}
        <div className="mt-4 space-y-2">
          <div className="h-3.5 w-full animate-pulse rounded-md bg-muted" />
          <div className="h-3.5 w-4/5 animate-pulse rounded-md bg-muted" />
        </div>

        {/* Author / Date */}
        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
            {/* Author */}
            <div className="flex min-w-0 items-center gap-2">
              <div className="size-8 shrink-0 animate-pulse rounded-full bg-muted" />

              <div className="h-3.5 w-20 animate-pulse rounded-md bg-muted" />
            </div>

            {/* Date */}
            <div className="h-3.5 w-20 animate-pulse rounded-md bg-muted" />
          </div>
        </div>
      </div>
    </article>
  );
}
