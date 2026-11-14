
"use client";

import Image from "next/image";
import { ImagePlus, X } from "lucide-react";
import { useEffect, useState } from "react";

type ProfilePictureInputProps = {
  value?: File | null;
  onChange: (file: File | null) => void;
  error?: string;
};

type Preview = {
  file: File;
  url: string;
};

export function ProfilePictureInput({
  value,
  onChange,
  error,
}: ProfilePictureInputProps) {
  const [preview, setPreview] = useState<Preview | null>(null);

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview.url);
      }
    };
  }, [preview]);

  const handleFileChange = (file: File | null) => {
    if (file) {
      setPreview({
        file,
        url: URL.createObjectURL(file),
      });
    } else {
      setPreview(null);
    }

    onChange(file);
  };

  const previewUrl =
    preview && preview.file === value ? preview.url : null;

  return (
    <div className="space-y-2">
      <span className="block text-sm font-medium text-foreground">
        تصویر پروفایل
        <span className="mr-1 text-xs font-normal text-muted-foreground">
          (اختیاری)
        </span>
      </span>

      <div className="flex items-center gap-4">
        <div className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-green-soft">
          {previewUrl ? (
            <Image
              src={previewUrl}
              alt="پیش‌نمایش تصویر پروفایل"
              fill
              unoptimized
              className="object-cover"
              sizes="64px"
            />
          ) : (
            <ImagePlus className="size-6 text-primary" />
          )}
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-2">
          <label className="cursor-pointer rounded-xl border border-input bg-card px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary">
            انتخاب تصویر
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(event) => {
                const file = event.target.files?.[0] ?? null;
                handleFileChange(file);
              }}
            />
          </label>

          {value && (
            <button
              type="button"
              onClick={() => handleFileChange(null)}
              className="rounded-xl p-2 text-muted-foreground transition hover:bg-secondary hover:text-destructive"
              aria-label="حذف تصویر"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
      </div>

      {error && (
        <p className="text-xs text-destructive">{error}</p>
      )}
    </div>
  );
}
