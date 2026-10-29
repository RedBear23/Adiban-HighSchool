import { Bell } from "lucide-react";

export function NotificationEmpty() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 text-center">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-green-soft text-primary">
        <Bell className="size-5" />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-foreground">
        اعلان جدیدی ندارید
      </h3>

      <p className="mt-1 max-w-55 text-xs leading-5 text-muted-foreground">
        وقتی اعلان جدیدی دریافت کنید، اینجا نمایش داده می‌شود.
      </p>
    </div>
  );
}