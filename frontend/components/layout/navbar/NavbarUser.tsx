
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
      <div className="h-10 w-24 animate-pulse rounded-xl bg-muted" />
    );
  }

  if (!user) {
    return (
      <div
        className={`flex items-center gap-2 ${
          mobile ? "w-full flex-col" : ""
        }`}
      >
        <Button
          type="button"
          variant="ghost"
          onClick={onLogin}
          className={
            mobile
              ? "h-11 w-full justify-start text-navy"
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
              ? "h-11 w-full"
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
          hover:bg-muted focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-ring
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
        className="w-64"
      >
        <DropdownMenuLabel className="font-normal">
          <p className="truncate text-sm font-semibold text-foreground">
            {fullName}
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            {user.national_id}
          </p>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleDashboard}>
          <UserRound className="size-4" />
          حساب کاربری
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          variant="destructive"
          disabled={isLoggingOut}
          onClick={handleLogout}
        >
          <LogOut className="size-4" />
          {isLoggingOut ? "در حال خروج..." : "خروج از حساب"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
