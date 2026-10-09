
"use client";

import { ArrowUpLeft } from "lucide-react";

import type { GalleryImage } from "./gallery_data";

type GalleryImageCardProps = {
  image: GalleryImage;
  onClick: () => void;
};

export function GalleryImageCard({
  image,
  onClick,
}: GalleryImageCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`مشاهده تصویر ${image.title}`}
      className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card text-right"
    >
      <img
        src={image.image}
        alt={image.title}
        loading="lazy"
        className="block h-auto w-full transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-black/10 to-transparent p-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold">
              {image.title}
            </h3>
            <p className="mt-1 text-sm text-white/80">
              {image.description}
            </p>
          </div>

          <ArrowUpLeft
            size={22}
            className="shrink-0"
          />
        </div>
      </div>
    </button>
  );
}
