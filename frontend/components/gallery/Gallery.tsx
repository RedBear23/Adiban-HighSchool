"use client";

import { useEffect, useMemo, useState } from "react";

import { getGalleryImages } from "@/services/gallery_services";
import type {
  GalleryImage,
  GallerySubject,
} from "@/types/gallery";

import { GalleryGrid } from "./GalleryGrid";
import { GalleryLightbox } from "./GalleryLightBox";

type GalleryCategory = {
  value: "all" | GallerySubject;
  label: string;
};

const gallery_categories: GalleryCategory[] = [
  {
    value: "all",
    label: "همه",
  },
  {
    value: "school",
    label: "محیط مدرسه",
  },
  {
    value: "activities",
    label: "فعالیت‌ها",
  },
  {
    value: "events",
    label: "مراسم‌ها",
  },
];

export function GallerySection() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory["value"]>("all");

  const [selectedImage, setSelectedImage] =
    useState<GalleryImage | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadGallery() {
      try {
        const data = await getGalleryImages();
        setImages(data);
      } finally {
        setIsLoading(false);
      }
    }

    loadGallery();
  }, []);

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") {
      return images;
    }

    return images.filter(
      (image) => image.subject === activeCategory,
    );
  }, [images, activeCategory]);

  return (
    <section
      dir="rtl"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <header className="mb-10">
        <p className="mb-3 text-sm font-semibold text-primary">
          گالری تصاویر ادیبان
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              روایت تصویری مدرسه
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              نگاهی به لحظه‌ها، فعالیت‌ها و خاطرات
              ماندگار در مدرسه‌ی ادیبان.
            </p>
          </div>

          <span className="text-sm text-muted-foreground">
            {filteredImages.length} تصویر
          </span>
        </div>
      </header>

      <div
        className="mb-8 flex flex-wrap gap-2"
        aria-label="دسته‌بندی تصاویر"
      >
        {gallery_categories.map((category) => {
          const isActive =
            activeCategory === category.value;

          return (
            <button
              key={category.value}
              type="button"
              onClick={() =>
                setActiveCategory(category.value)
              }
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {isLoading ? (
        <p className="py-16 text-center text-muted-foreground">
          در حال دریافت تصاویر گالری...
        </p>
      ) : (
        <GalleryGrid
          images={filteredImages}
          onImageClick={setSelectedImage}
        />
      )}

      {selectedImage && (
        <GalleryLightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}