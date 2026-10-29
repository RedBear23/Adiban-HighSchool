"use client";

import {
  Bell,
  CalendarDays,
  ClipboardList,
  Megaphone,
  Newspaper,
  Settings,
} from "lucide-react";

import type { Notification } from "@/types/notifications";

type NotificationItemProps = {
  notification: Notification;
  onRead: (notification: Notification) => void;
};

const notificationIcons = {
  news: Newspaper,
  announcement: Megaphone,
  exam: ClipboardList,
  event: CalendarDays,
  system: Settings,
};

function getRelativeTime(date: string) {
  const createdAt = new Date(date);
  const now = new Date();

  const differenceInSeconds = Math.floor(
    (now.getTime() - createdAt.getTime()) / 1000,
  );

  if (differenceInSeconds < 60) {
    return "همین الان";
  }

  const differenceInMinutes = Math.floor(
    differenceInSeconds / 60,
  );

  if (differenceInMinutes < 60) {
    return `${differenceInMinutes} دقیقه پیش`;
  }

  const differenceInHours = Math.floor(
    differenceInMinutes / 60,
  );

  if (differenceInHours < 24) {
    return `${differenceInHours} ساعت پیش`;
  }

  const differenceInDays = Math.floor(
    differenceInHours / 24,
  );

  if (differenceInDays < 7) {
    return `${differenceInDays} روز پیش`;
  }

  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(createdAt);
}

export function NotificationItem({
  notification,
  onRead,
}: NotificationItemProps) {
  const Icon =
    notificationIcons[notification.notification_type] ?? Bell;

  return (
    <button
      type="button"
      onClick={() => onRead(notification)}
        className={`
        flex
        w-full
        cursor-pointer
        border-b
        border-border
        px-4
        py-3
        text-right
        transition-all
        duration-200
        last:border-b-0

        ${
            notification.is_read
            ? "bg-card hover:bg-green-soft/60 hover:shadow-[inset_-3px_0_0_var(--primary)]"
            : "bg-green-soft/70 hover:bg-green-soft hover:shadow-[inset_-3px_0_0_var(--primary)]"
        }
        `}
    >
      <div className="flex w-full min-w-0 gap-3">
        <div
          className={`
            mt-0.5
            flex
            size-9
            shrink-0
            items-center
            justify-center
            rounded-xl

            ${
              notification.is_read
                ? "bg-muted text-muted-foreground"
                : "bg-primary/10 text-primary"
            }
          `}
        >
          <Icon className="size-4.5" strokeWidth={2} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="min-w-0 truncate text-sm font-semibold text-foreground">
              {notification.title}
            </h3>

            {!notification.is_read && (
              <span
                aria-label="خوانده نشده"
                className="mt-1.5 size-2 shrink-0 rounded-full bg-primary"
              />
            )}
          </div>

          <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground">
            {notification.message}
          </p>

          <span className="mt-2 block text-[11px] text-muted-foreground">
            {getRelativeTime(notification.created_at)}
          </span>
        </div>
      </div>
    </button>
  );
}