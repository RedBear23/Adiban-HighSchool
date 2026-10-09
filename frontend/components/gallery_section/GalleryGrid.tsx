
"use client";

import type { GalleryImage } from "./gallery_data";
import { GalleryImageCard } from "./GalleryImageCard";

type GalleryGridProps = {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
};

export function GalleryGrid({
  images,
  onImageClick,
}: GalleryGridProps) {
  if (images.length === 0) {
    return (
      <p className="py-16 text-center text-muted-foreground">
        تصویری در این دسته‌بندی وجود ندارد.
      </p>
    );
  }

  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {images.map((image) => (
        <GalleryImageCard
          key={image.id}
          image={image}
          onClick={() => onImageClick(image)}
        />
      ))}
    </div>
  );
}
