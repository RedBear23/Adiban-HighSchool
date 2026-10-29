export type NotificationType =
  | "news"
  | "announcement"
  | "exam"
  | "event"
  | "system";

export interface Notification {
  id: number;
  title: string;
  message: string;
  notification_type: NotificationType;
  link: string;
  is_read: boolean;
  created_at: string;
}

export interface UnreadNotificationCount {
  count: number;
}

export interface MarkAllNotificationsResponse {
  detail: string;
  updated_count: number;
}