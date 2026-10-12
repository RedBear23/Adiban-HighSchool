
"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

import type { GalleryImage } from "./gallery_data";

type GalleryLightboxProps = {
  image: GalleryImage;
  onClose: () => void;
};

export function GalleryLightbox({
  image,
  onClose,
}: GalleryLightboxProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="بستن تصویر"
        className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
      >
        <X size={24} />
      </button>

      <figure
        className="max-h-[90vh] max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={image.image}
          alt={image.title}
          className="max-h-[78vh] w-full rounded-xl object-contain"
        />

        <figcaption className="mt-4 text-center text-white">
          <h2 className="text-lg font-semibold">
            {image.title}
          </h2>
          <p className="mt-2 text-sm text-white/70">
            {image.description}
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
