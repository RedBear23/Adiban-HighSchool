"use client";

import {
  Camera,
  ImageUp,
  LoaderCircle,
} from "lucide-react";
import {
  ChangeEvent,
  useEffect,
  useState,
} from "react";

import { updateProfilePicture } from "@/services/auth_services";
import type { User } from "@/types/accounts";

type ChangeProfilePictureProps = {
  user: User;
  onUserChange: (user: User) => void;
};

export function ChangeProfilePicture({
  user,
  onUserChange,
}: ChangeProfilePictureProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(
    user.profile_picture,
  );
  const [isSubmitting, setIsSubmitting] =
    useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  function handleFileChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    if (preview?.startsWith("blob:")) {
      URL.revokeObjectURL(preview);
    }

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setMessage("");
  }

  async function handleSubmit() {
    if (!file) {
      return;
    }

    try {
      setIsSubmitting(true);
      setMessage("");

      const updatedUser = await updateProfilePicture({
        profile_picture: file,
      });

      onUserChange(updatedUser);
      setFile(null);
      setPreview(updatedUser.profile_picture);
      setMessage("تصویر پروفایل با موفقیت تغییر کرد.");
    } catch (error) {
      console.error(error);
      setMessage("تغییر تصویر پروفایل انجام نشد.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="rounded-2xl bg-card p-5 shadow-sm sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-blue-soft text-secondary-blue">
          <Camera className="size-5" />
        </div>

        <div>
          <h3 className="font-bold text-card-foreground">
            تصویر پروفایل
          </h3>

          <p className="text-xs text-muted-foreground">
            تصویر حساب کاربری خود را تغییر دهید.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center gap-5 sm:flex-row">
        <div className="size-24 shrink-0 overflow-hidden rounded-2xl bg-green-soft">
          {preview ? (
            <img
              src={preview}
              alt="پیش‌نمایش تصویر پروفایل"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-primary">
              <Camera className="size-7" />
            </div>
          )}
        </div>

        <div className="w-full min-w-0">
          <label className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">
            <ImageUp className="size-4" />

            انتخاب تصویر

            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          <button
            type="button"
            disabled={!file || isSubmitting}
            onClick={handleSubmit}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting && (
              <LoaderCircle className="size-4 animate-spin" />
            )}

            ذخیره تصویر
          </button>
        </div>
      </div>

      {message && (
        <p className="mt-4 text-xs text-muted-foreground">
          {message}
        </p>
      )}
    </section>
  );
}