import { useState } from "react";
import { Eye, EyeOff, Loader2, UserPlus } from "lucide-react";

import type { RegisterInput } from "@/types/accounts";
import { registerUser } from "@/services/auth_services";

type RegisterFormProps = {
  onSuccess?: () => void;
  onLoginClick?: () => void;
};

export function RegisterForm({
  onSuccess,
  onLoginClick,
}: RegisterFormProps) {
  const [form, setForm] = useState<RegisterInput>({
    national_id: "",
    password: "",
    first_name: "",
    last_name: "",
    phone_number: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (error) {
      setError(null);
    }
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError(null);
    setLoading(true);

    try {
      await registerUser(form);
      onSuccess?.();
    } catch {
      setError(
        "ثبت‌نام انجام نشد. لطفاً اطلاعات واردشده را بررسی کنید.",
      );
    } finally {
      setLoading(false);
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
        onSubmit={handleSubmit}
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
              name="first_name"
              type="text"
              value={form.first_name}
              onChange={handleChange}
              placeholder="نام"
              autoComplete="given-name"
              required
              disabled={loading}
              className="h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-60"
            />
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
              name="last_name"
              type="text"
              value={form.last_name}
              onChange={handleChange}
              placeholder="نام خانوادگی"
              autoComplete="family-name"
              required
              disabled={loading}
              className="h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-60"
            />
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
            name="national_id"
            type="text"
            inputMode="numeric"
            dir="ltr"
            value={form.national_id}
            onChange={handleChange}
            placeholder="کد ملی"
            autoComplete="username"
            required
            disabled={loading}
            className="h-11 w-full rounded-xl border border-input bg-background px-3.5 text-left text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-60"
          />
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
            name="phone_number"
            type="tel"
            inputMode="tel"
            dir="ltr"
            value={form.phone_number}
            onChange={handleChange}
            placeholder="09xxxxxxxxx"
            autoComplete="tel"
            required
            disabled={loading}
            className="h-11 w-full rounded-xl border border-input bg-background px-3.5 text-left text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-60"
          />
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
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              placeholder="رمز عبور"
              autoComplete="new-password"
              required
              disabled={loading}
              dir="ltr"
              className="h-11 w-full rounded-xl border border-input bg-background px-3.5 pl-11 text-left text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-60"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword((current) => !current)
              }
              disabled={loading}
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
        </div>

        {/* Error */}
        {error && (
          <div className="rounded-xl border border-destructive/20 bg-destructive/10 px-3.5 py-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
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