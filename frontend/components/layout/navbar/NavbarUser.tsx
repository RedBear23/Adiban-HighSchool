"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, LogIn, LogOut, UserRound } from "lucide-react";
import Link from "next/link";

import { useAuth } from "@/contexts/AuthContext";

type NavbarUserProps = {
  onLogin: () => void;
  onRegister: () => void;
  mobile?: boolean;
};

export default function NavbarUser({
  onLogin,
  onRegister,
  mobile = false,
}: NavbarUserProps) {
  const { user, isLoading, logout } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleDocumentClick(event: MouseEvent) {
      const target = event.target as Node;

      if (!menuRef.current?.contains(target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  async function handleLogout() {
    try {
      setIsLoggingOut(true);
      await logout();
      closeMenu();
    } finally {
      setIsLoggingOut(false);
    }
  }

  if (isLoading) {
    return (
      <div className="h-10 w-24 animate-pulse rounded-xl bg-primary-dark/50" />
    );
  }

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onLogin}
          className="flex h-10 cursor-pointer items-center gap-2 rounded-xl px-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
        >
          <LogIn className="size-4" />
          <span>ورود</span>
        </button>

        <button
          type="button"
          onClick={onRegister}
          className="h-10 cursor-pointer rounded-xl bg-white px-4 text-sm font-semibold text-primary transition-colors hover:bg-off-white"
        >
          ثبت‌نام
        </button>
      </div>
    );
  }

  const fullName =
    `${user.first_name ?? ""} ${user.last_name ?? ""}`.trim();

  const initials =
    `${user.first_name?.[0] ?? ""}${user.last_name?.[0] ?? ""}`;

  if (mobile) {
    return (
      <div ref={menuRef} className="w-full">
        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="flex w-full items-center gap-3 rounded-xl bg-primary-dark/60 p-2.5 text-white transition-colors hover:bg-primary-dark"
          aria-expanded={isMenuOpen}
          aria-haspopup="menu"
        >
          {user.profile_picture ? (
            <img
              src={user.profile_picture}
              alt={fullName}
              className="size-10 shrink-0 rounded-lg object-cover"
            />
          ) : (
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-sm font-bold text-primary">
              {initials}
            </div>
          )}

          <div className="min-w-0 flex-1 text-right">
            <p className="truncate text-sm font-semibold">
              {fullName}
            </p>

            <p className="mt-0.5 text-xs text-white/70">
              حساب کاربری
            </p>
          </div>

          <ChevronDown
            className={`size-4 shrink-0 transition-transform duration-200 ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isMenuOpen && (
          <div
            className="mt-2 overflow-hidden rounded-xl border border-primary-dark bg-card p-2 shadow-lg"
            role="menu"
          >
            <div className="border-b border-border px-3 py-3 text-right">
              <p className="truncate text-sm font-semibold text-foreground">
                {fullName}
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                {user.national_id}
              </p>
            </div>

            <div className="mt-2">
              <Link
                href="/dashboard"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted"
              >
                <UserRound className="size-4" />
                <span>حساب کاربری</span>
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-destructive transition-colors hover:bg-destructive/10 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <LogOut className="size-4" />

                <span>
                  {isLoggingOut
                    ? "در حال خروج..."
                    : "خروج از حساب"}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setIsMenuOpen((previous) => !previous)}
        className="flex h-11 items-center gap-2 rounded-xl bg-primary-dark/60 px-2.5 pr-2 text-white transition-colors hover:bg-primary-dark"
        aria-expanded={isMenuOpen}
        aria-haspopup="menu"
      >
        {user.profile_picture ? (
          <img
            src={user.profile_picture}
            alt={fullName}
            className="size-8 rounded-lg object-cover"
          />
        ) : (
          <div className="flex size-8 items-center justify-center rounded-lg bg-white text-xs font-bold text-primary">
            {initials}
          </div>
        )}

        <span className="max-w-32 truncate text-sm font-medium">
          {fullName}
        </span>

        <ChevronDown
          className={`size-4 transition-transform duration-200 ${
            isMenuOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isMenuOpen && (
        <div
          className="absolute left-0 top-[calc(100%+0.5rem)] z-60 w-64 overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-xl"
          role="menu"
        >
          <div className="border-b border-border px-3 py-3">
            <p className="truncate text-sm font-semibold text-foreground">
              {fullName}
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              {user.national_id}
            </p>
          </div>

          <div className="mt-2">
            <Link
              href="/dashboard"
              onClick={closeMenu}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted"
              role="menuitem"
            >
              <UserRound className="size-4" />
              <span>حساب کاربری</span>
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-destructive transition-colors hover:bg-destructive/10 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <LogOut className="size-4" />

              <span>
                {isLoggingOut
                  ? "در حال خروج..."
                  : "خروج از حساب"}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}