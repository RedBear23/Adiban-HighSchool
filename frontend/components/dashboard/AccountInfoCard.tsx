import {
  BadgeCheck,
  Fingerprint,
  Phone,
  UserRound,
} from "lucide-react";

import type {
  User,
  UserRole,
} from "@/types/accounts";

type AccountInfoCardProps = {
  user: User;
};

const roleLabels: Record<UserRole, string> = {
  student: "دانش‌آموز",
  teacher: "معلم",
  principal: "مدیر",
  vice_principal: "معاون",
  proctor: "ناظم",
  custodian: "خدمتگزار",
};

export function AccountInfoCard({
  user,
}: AccountInfoCardProps) {
  const fullName = `${user.first_name} ${user.last_name}`;

  const items = [
    {
      label: "نام و نام خانوادگی",
      value: fullName,
      icon: UserRound,
    },
    {
      label: "کد ملی",
      value: user.national_id,
      icon: Fingerprint,
      ltr: true,
    },
    {
      label: "شماره موبایل",
      value: user.phone_number,
      icon: Phone,
      ltr: true,
    },
    {
      label: "نقش کاربری",
      value: roleLabels[user.role],
      icon: BadgeCheck,
    },
  ];

  return (
    <section className="rounded-2xl bg-card p-5 shadow-sm sm:p-6">
      <div>
        <h2 className="text-lg font-bold text-card-foreground">
          اطلاعات حساب
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          اطلاعات ثبت‌شده شما در سامانه ادیبان
        </p>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex min-w-0 items-center gap-3 rounded-xl border border-border bg-background/50 p-4"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-green-soft text-primary">
                <Icon className="size-5" />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">
                  {item.label}
                </p>

                <p
                  dir={item.ltr ? "ltr" : "rtl"}
                  className={`mt-1 truncate text-sm font-semibold text-foreground ${
                    item.ltr ? "text-right" : ""
                  }`}
                >
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}