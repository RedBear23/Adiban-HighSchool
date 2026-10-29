import { api } from "./api";

import type {
  MarkAllNotificationsResponse,
  Notification,
  UnreadNotificationCount,
} from "@/types/notifications";

export async function getNotifications(): Promise<Notification[]> {
  const response = await api.get<Notification[]>("/notifications/");
  return response.data;
}

export async function getUnreadNotificationCount(): Promise<number> {
  const response = await api.get<UnreadNotificationCount>(
    "/notifications/unread-count/",
  );

  return response.data.count;
}

export async function markNotificationAsRead(
  notificationId: number,
): Promise<Notification> {
  const response = await api.patch<Notification>(
    `/notifications/${notificationId}/read/`,
  );

  return response.data;
}

export async function markAllNotificationsAsRead(): Promise<MarkAllNotificationsResponse> {
  const response = await api.post<MarkAllNotificationsResponse>(
    "/notifications/read-all/",
  );

  return response.data;
}