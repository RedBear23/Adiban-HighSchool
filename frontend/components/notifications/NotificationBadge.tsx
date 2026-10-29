"use client";

import { Bell } from "lucide-react";

type NotificationBadgeProps = {
  count: number;
  onClick?: () => void;
};

export function NotificationBadge({
  count,
  onClick,
}: NotificationBadgeProps) {
  const hasUnreadNotifications = count > 0;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        hasUnreadNotifications
          ? `${count} اعلان خوانده نشده`
          : "اعلان‌ها"
      }
      className="relative flex size-10 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
    >
      <Bell className="size-5" strokeWidth={2} />

      {hasUnreadNotifications && (
        <span
          aria-hidden="true"
          className="absolute right-0.5 top-0.5 flex min-w-5 h-5 items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold leading-none text-primary shadow-sm ring-2 ring-primary"
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}