"use client";

import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth } from "@/contexts/AuthContext";
import {
  loginSchema,
  type LoginFormInput,
  type LoginFormValues,
} from "@/schemas/auth.schemas";

import { AuthInput } from "./AuthInput";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onRegister: () => void;
};

export function LoginModal({
  isOpen,
  onClose,
  onRegister,
}: LoginModalProps) {
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInput, unknown, LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  if (!isOpen) {
    return null;
  }

  async function onSubmit(data: LoginFormValues) {
    try {
      setServerError("");

      await login(data);
      onClose();
    } catch {
      setServerError(
        "کد ملی یا رمز عبور واردشده صحیح نیست.",
      );
    }
  }

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-navy/45 px-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8">
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
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-blue-soft text-secondary-blue">
            <LockKeyhole className="size-7" />
          </div>

          <h2 className="text-2xl font-bold text-foreground">
            ورود به حساب
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            برای ورود به حساب کاربری خود اطلاعات زیر را وارد کنید.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <AuthInput
            label="کد ملی"
            type="text"
            inputMode="numeric"
            placeholder="کد ملی خود را وارد کنید"
            error={errors.national_id?.message}
            {...register("national_id")}
          />

          <div className="space-y-2">
            <label
              htmlFor="login-password"
              className="block text-sm font-medium text-foreground"
            >
              رمز عبور
            </label>

            <div className="relative">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                placeholder="رمز عبور خود را وارد کنید"
                autoComplete="current-password"
                dir="ltr"
                className="h-11 w-full rounded-xl border border-input bg-background px-4 pl-11 text-left text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20"
                {...register("password")}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword((previous) => !previous)
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                aria-label={
                  showPassword
                    ? "مخفی کردن رمز عبور"
                    : "نمایش رمز عبور"
                }
              >
                {showPassword ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            </div>

            {errors.password?.message && (
              <p className="text-xs text-destructive">
                {errors.password.message}
              </p>
            )}
          </div>

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
            {isSubmitting ? "در حال ورود..." : "ورود"}
          </button>
        </form>

        {/* Register */}
        <div className="mt-6 border-t border-border pt-5 text-center text-sm">
          <span className="text-muted-foreground">
            حساب کاربری ندارید؟
          </span>{" "}
          <button
            type="button"
            onClick={onRegister}
            className="font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            ثبت‌نام کنید
          </button>
        </div>
      </div>
    </div>
  );
}