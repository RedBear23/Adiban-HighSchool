
"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { LoginModal } from "@/components/auth/LoginModal";
import { RegisterModal } from "@/components/auth/RegisterModal";

import { NAV_LINKS } from "./nav_links";
import NavbarUser from "./NavbarUser";

export default function NavbarMobile() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  function openLogin() {
    setIsRegisterOpen(false);
    setIsOpen(false);
    setIsLoginOpen(true);
  }

  function openRegister() {
    setIsLoginOpen(false);
    setIsOpen(false);
    setIsRegisterOpen(true);
  }

  function closeModals() {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  }

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>

        <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon-lg"
                aria-label="باز کردن منو"
                className="text-navy"
              >
                <Menu className="size-5" />
              </Button>
            }
        />


        <SheetContent
          side="right"
          dir="rtl"
          className="flex w-[min(88vw,22rem)] flex-col gap-0"
        >
          <SheetHeader className="border-b border-border px-5 py-5 text-right">
            <SheetTitle className="text-lg font-bold text-navy">
              ادیبان
            </SheetTitle>

            <SheetDescription>
              دسترسی سریع به بخش‌های مختلف مدرسه
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto px-4 py-5">
            <NavbarUser
              mobile
              onLogin={openLogin}
              onRegister={openRegister}
              onNavigate={closeMenu}
            />

            <div className="my-5 border-t border-border" />

            <nav aria-label="ناوبری موبایل">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname === link.href ||
                        pathname.startsWith(`${link.href}/`);

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        aria-current={
                          isActive ? "page" : undefined
                        }
                        className={`
                          flex items-center rounded-xl px-4 py-3
                          text-sm font-medium transition-colors
                          ${
                            isActive
                              ? "bg-green-soft text-primary"
                              : "text-navy hover:bg-muted"
                          }
                        `}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={closeModals}
        onRegister={openRegister}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={closeModals}
        onLogin={openLogin}
      />
    </div>
  );
}
