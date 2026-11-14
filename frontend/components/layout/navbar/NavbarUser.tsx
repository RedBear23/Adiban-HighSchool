
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ChevronDown,
  LogIn,
  LogOut,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useAuth } from "@/contexts/AuthContext";

type NavbarUserProps = {
  onLogin: () => void;
  onRegister: () => void;
  mobile?: boolean;
  onNavigate?: () => void;
};

export default function NavbarUser({
  onLogin,
  onRegister,
  mobile = false,
  onNavigate,
}: NavbarUserProps) {
  const router = useRouter();
  const { user, isLoading, logout } = useAuth();

  const [isLoggingOut, setIsLoggingOut] = useState(false);

  if (isLoading) {
    return (
      <div
        aria-label="در حال بررسی وضعیت حساب کاربری"
        aria-busy="true"
        className={`flex items-center gap-2 ${
          mobile ? "w-full" : ""
        }`}
      >
        <div
          className={`h-11 animate-pulse rounded-xl bg-border ${
            mobile ? "min-w-0 flex-1" : "h-10 w-20"
          }`}
        />

        <div
          className={`h-11 animate-pulse rounded-xl bg-border ${
            mobile ? "min-w-0 flex-1" : "h-10 w-24"
          }`}
        />
      </div>
    );
  }

  if (!user) {
    return (
      <div
        className={`flex items-center gap-2 ${
          mobile ? "w-full" : ""
        }`}
      >
        <Button
          type="button"
          variant={mobile ? "outline" : "ghost"}
          onClick={onLogin}
          className={
            mobile
              ? "h-11 min-w-0 flex-1 rounded-xl border-border bg-card text-navy hover:border-primary/30 hover:bg-green-soft hover:text-primary"
              : "h-10 px-3 text-navy"
          }
        >
          <LogIn className="size-4" />
          ورود
        </Button>

        <Button
          type="button"
          onClick={onRegister}
          className={
            mobile
              ? "h-11 min-w-0 flex-1 rounded-xl"
              : "h-10 px-4"
          }
        >
          ثبت‌نام
        </Button>
      </div>
    );
  }

  const fullName =
    `${user.first_name ?? ""} ${user.last_name ?? ""}`.trim();

  const initials =
    `${user.first_name?.[0] ?? ""}${user.last_name?.[0] ?? ""}`;

  async function handleLogout() {
    try {
      setIsLoggingOut(true);
      await logout();
      onNavigate?.();
    } finally {
      setIsLoggingOut(false);
    }
  }

  function handleDashboard() {
    onNavigate?.();
    router.push("/dashboard");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`
          flex h-11 items-center gap-2 rounded-xl border border-border
          bg-card px-2.5 text-navy transition-colors
          hover:border-primary/30 hover:bg-green-soft
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-ring
          ${mobile ? "w-full justify-between" : ""}
        `}
      >
        <div className="flex min-w-0 items-center gap-2">
          {user.profile_picture ? (
            <Image
              src={user.profile_picture}
              alt={fullName}
              width={32}
              height={32}
              unoptimized
              className="size-8 shrink-0 rounded-lg object-cover"
            />
          ) : (
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-green-soft text-xs font-bold text-primary">
              {initials}
            </div>
          )}

          <span className="max-w-36 truncate text-sm font-medium">
            {fullName}
          </span>
        </div>

        <ChevronDown className="size-4 shrink-0 text-muted-foreground" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-64 rounded-xl border-border bg-popover p-1.5 shadow-lg"
      >
        <DropdownMenuLabel className="px-3 py-2.5 font-normal">
          <p className="truncate text-sm font-semibold text-foreground">
            {fullName}
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            {user.national_id}
          </p>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="mx-1" />

        <DropdownMenuItem
          onClick={handleDashboard}
          className="cursor-pointer gap-2.5 rounded-lg px-3 py-2.5 text-sm hover:bg-muted"
        >
          <UserRound className="size-4 text-muted-foreground" />
          حساب کاربری
        </DropdownMenuItem>

        <DropdownMenuSeparator className="mx-1" />

        <DropdownMenuItem
          variant="destructive"
          disabled={isLoggingOut}
          onClick={handleLogout}
          className="cursor-pointer gap-2.5 rounded-lg px-3 py-2.5 text-sm"
        >
          <LogOut className="size-4" />
          {isLoggingOut ? "در حال خروج..." : "خروج از حساب"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
