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
      className="
        relative flex size-10 items-center justify-center
        rounded-xl text-navy transition-colors
        hover:bg-muted focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-ring
      "
    >
      <Bell className="size-5" strokeWidth={2} />

      {hasUnreadNotifications && (
        <span
          aria-hidden="true"
          className="
            absolute right-0.5 top-0.5 flex h-5 min-w-5
            items-center justify-center rounded-full
            bg-primary px-1 text-[10px] font-bold
            leading-none text-white shadow-sm
          "
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}
