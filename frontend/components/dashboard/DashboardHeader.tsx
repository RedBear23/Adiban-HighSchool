import { LayoutDashboard } from "lucide-react";

import type { User } from "@/types/accounts";

type DashboardHeaderProps = {
  user: User;
};

export function DashboardHeader({
  user,
}: DashboardHeaderProps) {
  return (
    <header className="flex items-start gap-4">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <LayoutDashboard className="size-5" />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          حساب کاربری
        </h1>

        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          {user.first_name} عزیز، اطلاعات حساب و تنظیمات
          امنیتی شما از این بخش قابل مدیریت است.
        </p>
      </div>
    </header>
  );
}