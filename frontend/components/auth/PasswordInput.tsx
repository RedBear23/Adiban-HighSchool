"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import type { InputHTMLAttributes } from "react";

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function PasswordInput({
  label,
  error,
  id,
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-foreground"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          {...props}
          type={showPassword ? "text" : "password"}
          className={`h-11 w-full rounded-xl border bg-card px-4 pl-11 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15 ${
            error ? "border-destructive" : "border-input"
          }`}
        />

        <button
          type="button"
          onClick={() => setShowPassword((value) => !value)}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
          aria-label={
            showPassword ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"
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
        <p className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}