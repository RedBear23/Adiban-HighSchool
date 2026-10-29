import { ShieldCheck, UserRound } from "lucide-react";

import type {
  User,
  UserRole,
} from "@/types/accounts";

type ProfileCardProps = {
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

export function ProfileCard({
  user,
}: ProfileCardProps) {
  const fullName = `${user.first_name} ${user.last_name}`;

  return (
    <section className="overflow-hidden rounded-2xl bg-card shadow-sm">
      <div className="h-24 bg-linear-to-l from-primary to-secondary-blue" />

      <div className="px-5 pb-6">
        <div className="-mt-12">
          <div className="size-24 overflow-hidden rounded-2xl border-4 border-card bg-green-soft shadow-sm">
            {user.profile_picture ? (
              <img
                src={user.profile_picture}
                alt={fullName}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-primary">
                <UserRound className="size-9" />
              </div>
            )}
          </div>
        </div>

        <h2 className="mt-4 text-xl font-bold text-card-foreground">
          {fullName}
        </h2>

        <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-green-soft px-3 py-1.5 text-xs font-medium text-primary">
          <ShieldCheck className="size-3.5" />
          {roleLabels[user.role]}
        </div>

        <div className="mt-5 border-t border-border pt-4">
          <p className="text-xs leading-6 text-muted-foreground">
            اطلاعات هویتی این حساب توسط مدرسه مدیریت
            می‌شود و قابل ویرایش مستقیم نیست.
          </p>
        </div>
      </div>
    </section>
  );
}