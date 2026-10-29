"use client";

import { useEffect, useState } from "react";

import { AccountInfoCard } from "@/components/dashboard/AccountInfoCard";
import { ChangePasswordForm } from "@/components/dashboard/ChangePasswordForm";
import { ChangeProfilePicture } from "@/components/dashboard/ChangeProfilePicture";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { ProfileCard } from "@/components/dashboard/ProfileCard";
import { getCurrentUser } from "@/services/auth_services";
import type { User } from "@/types/accounts";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const data = await getCurrentUser();
        setUser(data);
      } catch (error) {
        console.error("Failed to load user:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadUser();
  }, []);

  if (isLoading) {
    return (
      <main
        dir="rtl"
        className="flex min-h-[70vh] items-center justify-center px-4"
      >
        <p className="text-sm text-muted-foreground">
          در حال دریافت اطلاعات حساب...
        </p>
      </main>
    );
  }

  if (!user) {
    return (
      <main
        dir="rtl"
        className="flex min-h-[70vh] items-center justify-center px-4"
      >
        <div className="rounded-xl bg-card p-8 text-center shadow-sm">
          <h1 className="text-xl font-bold text-foreground">
            اطلاعات حساب دریافت نشد
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            لطفاً دوباره وارد حساب کاربری شوید.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main
      dir="rtl"
      className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <DashboardHeader user={user} />

        <div className="mt-8 grid gap-6 lg:grid-cols-[320px_1fr]">
          <ProfileCard user={user} />

          <AccountInfoCard user={user} />
        </div>

        <section className="mt-6">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-foreground">
              تنظیمات حساب
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              مدیریت تصویر پروفایل و امنیت حساب کاربری
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <ChangeProfilePicture
              user={user}
              onUserChange={setUser}
            />

            <ChangePasswordForm />
          </div>
        </section>
      </div>
    </main>
  );
}