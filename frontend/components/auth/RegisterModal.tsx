"use client";

import { useState } from "react";
import { UserPlus, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth } from "@/contexts/AuthContext";
import {
  registerSchema,
  type RegisterFormInput,
  type RegisterFormValues,
} from "@/schemas/auth.schemas";

import {
  getApiErrorMessage,
  getApiFieldErrors,
} from "@/lib/api_error";

import { AuthInput } from "./AuthInput";
import { PasswordInput } from "./PasswordInput";
import { ProfilePictureInput } from "./ProfilePictureInput";

type RegisterModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
};

export function RegisterModal({
  isOpen,
  onClose,
  onLogin,
}: RegisterModalProps) {
  const { register: registerUser } = useAuth();

  const [serverError, setServerError] = useState("");

const {
  register,
  handleSubmit,
  setValue,
  setError,
  watch,
  formState: { errors, isSubmitting },
} = useForm<
  RegisterFormInput,
  unknown,
  RegisterFormValues
>({
  resolver: zodResolver(registerSchema),

  defaultValues: {
    national_id: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    password: "",
    profile_picture: null,
  },
});

  const profilePicture = watch("profile_picture");

  if (!isOpen) {
    return null;
  }

async function onSubmit(data: RegisterFormValues) {
  try {
    setServerError("");

    await registerUser(data);
    onClose();
  } catch (error) {
    const fieldErrors = getApiFieldErrors(error);

    const registerFields = [
      "national_id",
      "first_name",
      "last_name",
      "phone_number",
      "password",
      "profile_picture",
    ] as const;

    let hasFieldError = false;

    for (const field of registerFields) {
      const message = fieldErrors[field]?.[0];

      if (!message) {
        continue;
      }

      setError(field, {
        type: "server",
        message,
      });

      hasFieldError = true;
    }

    if (!hasFieldError) {
      setServerError(
        getApiErrorMessage(
          error,
          "ثبت‌نام انجام نشد. لطفاً دوباره تلاش کنید.",
        ),
      );
    }
  }
}

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-navy/45 px-4 py-6 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative my-auto w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute left-4 top-4 flex size-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          aria-label="بستن"
        >
          <X className="size-5" />
        </button>

        {/* Header */}
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-green-soft text-primary">
            <UserPlus className="size-7" />
          </div>

          <h2 className="text-2xl font-bold text-foreground">
            ایجاد حساب کاربری
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            اطلاعات خود را وارد کنید تا حساب کاربری شما ساخته شود.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* Profile Picture */}
          <ProfilePictureInput
            value={profilePicture ?? null}
            onChange={(file) =>
              setValue("profile_picture", file, {
                shouldValidate: true,
              })
            }
            error={errors.profile_picture?.message}
          />

          {/* First Name / Last Name */}
          <div className="grid gap-5 sm:grid-cols-2">
            <AuthInput
              label="نام"
              type="text"
              placeholder="نام خود را وارد کنید"
              error={errors.first_name?.message}
              {...register("first_name")}
            />

            <AuthInput
              label="نام خانوادگی"
              type="text"
              placeholder="نام خانوادگی خود را وارد کنید"
              error={errors.last_name?.message}
              {...register("last_name")}
            />
          </div>

          <AuthInput
            label="کد ملی"
            type="text"
            inputMode="numeric"
            placeholder="کد ملی خود را وارد کنید"
            error={errors.national_id?.message}
            {...register("national_id")}
          />

          <AuthInput
            label="شماره موبایل"
            type="tel"
            inputMode="tel"
            placeholder="09123456789"
            error={errors.phone_number?.message}
            {...register("phone_number")}
          />

          <PasswordInput
            label="رمز عبور"
            placeholder="حداقل ۸ کاراکتر"
            error={errors.password?.message}
            {...register("password")}
          />

          {serverError && (
            <div className="rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {serverError}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="h-11 w-full rounded-xl bg-primary px-4 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting
              ? "در حال ایجاد حساب..."
              : "ثبت‌نام"}
          </button>
        </form>

        {/* Login */}
        <div className="mt-6 border-t border-border pt-5 text-center text-sm">
          <span className="text-muted-foreground">
            قبلاً حساب ساخته‌اید؟
          </span>{" "}
          <button
            type="button"
            onClick={onLogin}
            className="font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            وارد شوید
          </button>
        </div>
      </div>
    </div>
  );
}