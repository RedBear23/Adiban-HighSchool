"use client";

import { useEffect, useState } from "react";
import { Bell, CheckCheck, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  getNotifications,
  getUnreadNotificationCount,
  markAllNotificationsAsRead,
  markNotificationAsRead,
} from "@/services/notification_services";
import type { Notification } from "@/types/notifications";

import { NotificationBadge } from "./NotificationBadge";
import { NotificationList } from "./NotificationList";

export function NotificationCenter() {
  const router = useRouter();

  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  async function loadNotifications() {
    try {
      const [notificationsData, unreadCountData] =
        await Promise.all([
          getNotifications(),
          getUnreadNotificationCount(),
        ]);

      setNotifications(notificationsData);
      setUnreadCount(unreadCountData);
    } catch {
      setNotifications([]);
      setUnreadCount(0);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadNotifications();
  }, []);

  async function handleNotificationRead(
    notification: Notification,
  ) {
    if (!notification.is_read) {
      const updatedNotification =
        await markNotificationAsRead(notification.id);

      setNotifications((currentNotifications) =>
        currentNotifications.map((item) =>
          item.id === updatedNotification.id
            ? updatedNotification
            : item,
        ),
      );

      setUnreadCount((currentCount) =>
        Math.max(currentCount - 1, 0),
      );
    }

    setIsOpen(false);

    if (notification.link) {
      router.push(notification.link);
    }
  }

  async function handleMarkAllAsRead() {
    if (unreadCount === 0) {
      return;
    }

    await markAllNotificationsAsRead();

    setNotifications((currentNotifications) =>
      currentNotifications.map((notification) => ({
        ...notification,
        is_read: true,
      })),
    );

    setUnreadCount(0);
  }

  return (
    <div className="relative">
      <NotificationBadge
        count={unreadCount}
        onClick={() => setIsOpen((current) => !current)}
      />

      {isOpen && (
        <>
          {/* Backdrop */}
          <button
            type="button"
            aria-label="بستن اعلان‌ها"
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setIsOpen(false)}
          />

          {/* Notification dropdown */}
          <div
            dir="rtl"
            className="
              fixed
              inset-x-3
              top-21
              z-50
              mx-auto
              flex
              max-h-[calc(100dvh-96px)]
              w-auto
              max-w-105
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-border
              bg-popover
              shadow-xl

              sm:absolute
              sm:inset-x-auto
              sm:left-0
              sm:top-full
              sm:mt-2
              sm:mx-0
              sm:max-h-[min(32rem,calc(100dvh-100px))]
              sm:w-90
              sm:max-w-none
            "
          >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border px-4 py-3">
              <div className="flex min-w-0 items-center gap-2">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-green-soft text-primary">
                  <Bell className="size-4.5" strokeWidth={2} />
                </div>

                <div className="min-w-0">
                  <h2 className="text-sm font-semibold text-foreground">
                    اعلان‌ها
                  </h2>

                  {unreadCount > 0 && (
                    <p className="mt-0.5 truncate text-[11px] text-muted-foreground">
                      {unreadCount} اعلان خوانده نشده
                    </p>
                  )}
                </div>
              </div>

              {unreadCount > 0 && (
                <button
                  type="button"
                  onClick={handleMarkAllAsRead}
                  className="
                    flex
                    shrink-0
                    cursor-pointer
                    items-center
                    gap-1
                    rounded-lg
                    px-2
                    py-1.5
                    text-[11px]
                    font-medium
                    text-primary
                    transition-colors
                    hover:bg-green-soft
                  "
                >
                  <CheckCheck className="size-3.5" />
                  <span className="hidden xs:inline">
                    همه خوانده شد
                  </span>
                </button>
              )}
            </div>

            {/* Content */}
            <div className="min-h-0 flex-1 overflow-hidden">
              {isLoading ? (
                <div className="flex min-h-40 items-center justify-center">
                  <Loader2 className="size-5 animate-spin text-primary" />
                </div>
              ) : (
                <NotificationList
                  notifications={notifications}
                  onRead={handleNotificationRead}
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}