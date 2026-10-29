"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Eye,
  EyeOff,
  KeyRound,
  LoaderCircle,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { getApiFieldErrors } from "@/lib/api_error";
import {
  changePasswordSchema,
  type ChangePasswordFormValues,
} from "@/schemas/auth.schemas";
import { changePassword } from "@/services/auth_services";

export function ChangePasswordForm() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] =
    useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(changePasswordSchema),
  });

  async function onSubmit(
    data: ChangePasswordFormValues,
  ) {
    try {
      setMessage("");
      setIsSuccess(false);
      clearErrors();

      const response = await changePassword(data);

      setMessage(response.detail);
      setIsSuccess(true);

      reset();
    } catch (error) {
      const apiErrors = getApiFieldErrors(error);

      let hasFieldError = false;

      if (apiErrors.current_password?.[0]) {
        setError("current_password", {
          type: "server",
          message:
            apiErrors.current_password[0],
        });

        hasFieldError = true;
      }

      if (apiErrors.new_password?.[0]) {
        setError("new_password", {
          type: "server",
          message:
            apiErrors.new_password[0],
        });

        hasFieldError = true;
      }

      if (apiErrors.confirm_password?.[0]) {
        setError("confirm_password", {
          type: "server",
          message:
            apiErrors.confirm_password[0],
        });

        hasFieldError = true;
      }

      if (apiErrors.non_field_errors?.[0]) {
        setMessage(
          apiErrors.non_field_errors[0],
        );
        setIsSuccess(false);

        return;
      }

      if (apiErrors.detail?.[0]) {
        setMessage(apiErrors.detail[0]);
        setIsSuccess(false);

        return;
      }

      if (!hasFieldError) {
        setMessage(
          "تغییر رمز عبور انجام نشد. دوباره تلاش کنید.",
        );
        setIsSuccess(false);
      }
    }
  }

  return (
    <section className="rounded-2xl bg-card p-5 shadow-sm sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-green-soft text-primary">
          <KeyRound className="size-5" />
        </div>

        <div>
          <h3 className="font-bold text-card-foreground">
            تغییر رمز عبور
          </h3>

          <p className="text-xs leading-6 text-muted-foreground">
            برای امنیت حساب، رمز فعلی خود را
            وارد کنید.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 space-y-4"
      >
        <PasswordField
          label="رمز عبور فعلی"
          error={
            errors.current_password?.message
          }
          showPassword={showPassword}
          onToggle={() =>
            setShowPassword(
              (value) => !value,
            )
          }
          autoComplete="current-password"
          {...register("current_password")}
        />

        <PasswordField
          label="رمز عبور جدید"
          error={
            errors.new_password?.message
          }
          showPassword={showPassword}
          onToggle={() =>
            setShowPassword(
              (value) => !value,
            )
          }
          autoComplete="new-password"
          {...register("new_password")}
        />

        <PasswordField
          label="تکرار رمز عبور جدید"
          error={
            errors.confirm_password?.message
          }
          showPassword={showPassword}
          onToggle={() =>
            setShowPassword(
              (value) => !value,
            )
          }
          autoComplete="new-password"
          {...register("confirm_password")}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting && (
            <LoaderCircle className="size-4 animate-spin" />
          )}

          {isSubmitting
            ? "در حال تغییر..."
            : "تغییر رمز عبور"}
        </button>

        {message && (
          <p
            className={
              isSuccess
                ? "text-sm leading-6 text-primary"
                : "text-sm leading-6 text-destructive"
            }
          >
            {message}
          </p>
        )}
      </form>
    </section>
  );
}

type PasswordFieldProps = {
  label: string;
  error?: string;
  showPassword: boolean;
  onToggle: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

function PasswordField({
  label,
  error,
  showPassword,
  onToggle,
  ...props
}: PasswordFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>

      <div className="relative">
        <input
          {...props}
          type={
            showPassword
              ? "text"
              : "password"
          }
          dir="ltr"
          className={`w-full rounded-xl border bg-background px-4 py-3 pl-11 text-left text-sm text-foreground outline-none transition focus:ring-2 focus:ring-ring/20 ${
            error
              ? "border-destructive focus:border-destructive"
              : "border-input focus:border-primary"
          }`}
        />

        <button
          type="button"
          onClick={onToggle}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
          aria-label={
            showPassword
              ? "مخفی کردن رمز عبور"
              : "نمایش رمز عبور"
          }
        >
          {showPassword ? (
            <EyeOff className="size-4" />
          ) : (
            <Eye className="size-4" />
          )}
        </button>
      </div>

      {error && (
        <p className="mt-1.5 text-xs leading-5 text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}