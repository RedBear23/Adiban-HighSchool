"use client";

import { ImagePlus, X } from "lucide-react";
import { useEffect, useState } from "react";

type ProfilePictureInputProps = {
  value?: File | null;
  onChange: (file: File | null) => void;
  error?: string;
};

export function ProfilePictureInput({
  value,
  onChange,
  error,
}: ProfilePictureInputProps) {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!value) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(value);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [value]);

  return (
    <div className="space-y-2">
      <span className="block text-sm font-medium text-foreground">
        تصویر پروفایل
        <span className="mr-1 text-xs font-normal text-muted-foreground">
          (اختیاری)
        </span>
      </span>

      <div className="flex items-center gap-4">
        <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-green-soft">
          {preview ? (
            <img
              src={preview}
              alt="پیش‌نمایش تصویر پروفایل"
              className="size-full object-cover"
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
                onChange(file);
              }}
            />
          </label>

          {value && (
            <button
              type="button"
              onClick={() => onChange(null)}
              className="rounded-xl p-2 text-muted-foreground transition hover:bg-secondary hover:text-destructive"
              aria-label="حذف تصویر"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
      </div>

      {error && (
        <p className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}