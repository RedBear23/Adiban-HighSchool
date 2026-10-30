"use client";

import { useState } from "react";
import { Eye, EyeOff, Loader2, UserPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerUser } from "@/services/auth_services";
import {
  registerSchema,
  type RegisterFormInput,
  type RegisterFormValues,
} from "@/schemas/auth.schemas";

import {
  getApiErrorMessage,
  getApiFieldErrors,
} from "@/lib/api_error";

type RegisterFormProps = {
  onSuccess?: () => void;
  onLoginClick?: () => void;
};

export function RegisterForm({
  onSuccess,
  onLoginClick,
}: RegisterFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

const {
  register,
  handleSubmit,
  setError,
  formState: { errors, isSubmitting },
} = useForm<
  RegisterFormInput,
  unknown,
  RegisterFormValues
>({
  resolver: zodResolver(registerSchema),

  defaultValues: {
    national_id: "",
    password: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    profile_picture: null,
  },
});

async function onSubmit(data: RegisterFormValues) {
  try {
    setServerError(null);

    await registerUser(data);

    onSuccess?.();
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
    <div className="w-full">
      {/* Header */}
      <div className="mb-7 text-center">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl bg-green-soft text-primary">
          <UserPlus className="size-6" />
        </div>

        <h2 className="text-xl font-bold text-foreground">
          ایجاد حساب کاربری
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          اطلاعات خود را وارد کنید تا حساب شما ساخته شود.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        {/* First name / Last name */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="first_name"
              className="text-sm font-medium text-foreground"
            >
              نام
            </label>

            <input
              id="first_name"
              type="text"
              placeholder="نام"
              autoComplete="given-name"
              disabled={isSubmitting}
              className="h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-60"
              {...register("first_name")}
            />

            {errors.first_name?.message && (
              <p className="text-xs text-destructive">
                {errors.first_name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="last_name"
              className="text-sm font-medium text-foreground"
            >
              نام خانوادگی
            </label>

            <input
              id="last_name"
              type="text"
              placeholder="نام خانوادگی"
              autoComplete="family-name"
              disabled={isSubmitting}
              className="h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-60"
              {...register("last_name")}
            />

            {errors.last_name?.message && (
              <p className="text-xs text-destructive">
                {errors.last_name.message}
              </p>
            )}
          </div>
        </div>

        {/* National ID */}
        <div className="space-y-2">
          <label
            htmlFor="national_id"
            className="text-sm font-medium text-foreground"
          >
            کد ملی
          </label>

          <input
            id="national_id"
            type="text"
            inputMode="numeric"
            dir="ltr"
            placeholder="کد ملی"
            autoComplete="username"
            disabled={isSubmitting}
            className="h-11 w-full rounded-xl border border-input bg-background px-3.5 text-left text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-60"
            {...register("national_id")}
          />

          {errors.national_id?.message && (
            <p className="text-xs text-destructive">
              {errors.national_id.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label
            htmlFor="phone_number"
            className="text-sm font-medium text-foreground"
          >
            شماره موبایل
          </label>

          <input
            id="phone_number"
            type="tel"
            inputMode="tel"
            dir="ltr"
            placeholder="09xxxxxxxxx"
            autoComplete="tel"
            disabled={isSubmitting}
            className="h-11 w-full rounded-xl border border-input bg-background px-3.5 text-left text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-60"
            {...register("phone_number")}
          />

          {errors.phone_number?.message && (
            <p className="text-xs text-destructive">
              {errors.phone_number.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label
            htmlFor="register-password"
            className="text-sm font-medium text-foreground"
          >
            رمز عبور
          </label>

          <div className="relative">
            <input
              id="register-password"
              type={showPassword ? "text" : "password"}
              placeholder="رمز عبور"
              autoComplete="new-password"
              dir="ltr"
              disabled={isSubmitting}
              className="h-11 w-full rounded-xl border border-input bg-background px-3.5 pl-11 text-left text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-60"
              {...register("password")}
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword((current) => !current)
              }
              disabled={isSubmitting}
              aria-label={
                showPassword
                  ? "مخفی کردن رمز عبور"
                  : "نمایش رمز عبور"
              }
              className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center text-muted-foreground transition hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>

          {errors.password?.message && (
            <p className="text-xs text-destructive">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Error */}
        {serverError && (
          <div className="rounded-xl border border-destructive/20 bg-destructive/10 px-3.5 py-3 text-sm text-destructive">
            {serverError}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              در حال ثبت‌نام...
            </>
          ) : (
            "ثبت‌نام"
          )}
        </button>
      </form>

      {/* Login link */}
      <div className="mt-6 text-center text-sm text-muted-foreground">
        قبلاً حساب ساخته‌اید؟{" "}
        <button
          type="button"
          onClick={onLoginClick}
          className="font-semibold text-primary transition hover:text-primary-hover"
        >
          وارد شوید
        </button>
      </div>
    </div>
  );
}