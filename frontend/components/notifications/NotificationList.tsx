"use client";

import type { Notification } from "@/types/notifications";

import { NotificationEmpty } from "./NotificationEmpty";
import { NotificationItem } from "./NotificationItem";

type NotificationListProps = {
  notifications: Notification[];
  onRead: (notification: Notification) => void;
};

export function NotificationList({
  notifications,
  onRead,
}: NotificationListProps) {
  if (notifications.length === 0) {
    return <NotificationEmpty />;
  }

  return (
    <div className="max-h-[calc(100dvh-160px)] overflow-y-auto overscroll-contain sm:max-h-112">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onRead={onRead}
        />
      ))}
    </div>
  );
}