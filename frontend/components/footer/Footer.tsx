"use client";

import { useState } from "react";
import {
  ArrowUp,
  Check,
  Clock3,
  Copy,
  MapPin,
  Phone,
} from "lucide-react";

const footer_links = [
  { label: "صفحه اصلی", href: "#hero" },
  { label: "آمار مدرسه", href: "#statistics" },
  { label: "معلمان مدرسه", href: "#teachers" },
  { label: "معرفی مدیر مدرسه", href: "#principal" },
  { label: "دانش‌آموزان ممتاز", href: "#students" },
];

const school_address = "اردیبهشت بین بهمن و اسفند";
const school_phone = "۰۹۰-۲۲۸-۷۹۱۲۱+";

export function Footer() {
  const [copiedField, setCopiedField] = useState<
    "address" | "phone" | null
  >(null);


async function copyToClipboard(
  value: string,
  field: "address" | "phone",
) {
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const textarea = document.createElement("textarea");

    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.cssText =
      "position:fixed;top:0;left:0;opacity:0;font-size:16px";

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, value.length);

    const copied = document.execCommand("copy");
    textarea.remove();

    if (!copied) {
      setCopiedField(null);
      return;
    }
  }

  setCopiedField(field);

  setTimeout(() => {
    setCopiedField((current) =>
      current === field ? null : current,
    );
  }, 1800);
}


  return (
    <footer
      id="footer"
      className="relative mt-8 overflow-hidden bg-primary-dark text-white"
      dir="rtl"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-32 h-80 w-80 rounded-full bg-secondary-blue/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-1/3 h-80 w-80 rounded-full bg-primary/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 pt-12 sm:px-6 sm:pt-14 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-10 pb-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3.5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg">
                <img
                  src="/logo.jpg"
                  alt="لوگوی مدرسه ادیبان"
                  className="rounded-full"
                />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  ادیبان
                </h2>
                <p className="mt-1 text-xs leading-6 text-white/75 sm:text-sm">
                  مسیر یادگیری، رشد و ساختن آینده
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-8 text-white/75">
              در مدرسه ادیبان، هر روز فرصتی تازه برای یادگیری،
              کشف توانایی‌ها و قدم برداشتن به سوی آینده‌ای روشن‌تر است.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="دسترسی سریع">
            <h3 className="mb-5 flex items-center gap-3 text-base font-bold">
              دسترسی سریع
              <span className="h-0.5 w-6 rounded-full bg-secondary-blue" />
            </h3>

            <ul className="space-y-3.5">
              {footer_links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/75 transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-blue transition-transform duration-200 group-hover:scale-125" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Information */}
          <div>
            <h3 className="mb-5 flex items-center gap-3 text-base font-bold">
              ارتباط با ما
              <span className="h-0.5 w-6 rounded-full bg-secondary-blue" />
            </h3>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-100">
                  <MapPin size={17} />
                </span>

                <div className="min-w-0 text-sm leading-7">
                  <p className="font-medium text-white">
                    آدرس مدرسه
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard(school_address, "address")
                    }
                    aria-label="کپی آدرس مدرسه"
                    title="برای کپی کلیک کنید"
                    className="group inline-flex max-w-full items-center gap-2 text-right text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-blue rounded-sm"
                  >
                    <span>{school_address}</span>

                    {copiedField === "address" ? (
                      <Check
                        size={15}
                        className="shrink-0 text-emerald-300"
                      />
                    ) : (
                      <Copy
                        size={15}
                        className="shrink-0 opacity-60 transition-opacity group-hover:opacity-100"
                      />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-100">
                  <Phone size={17} />
                </span>

                <div className="min-w-0 text-sm leading-7">
                  <p className="font-medium text-white">
                    شماره تماس
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard(school_phone, "phone")
                    }
                    aria-label="کپی شماره تماس مدرسه"
                    title="برای کپی کلیک کنید"
                    dir="rtl"
                    className="group inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-blue rounded-sm"
                  >
                    <span>{school_phone}</span>

                    {copiedField === "phone" ? (
                      <Check
                        size={15}
                        className="shrink-0 text-emerald-300"
                      />
                    ) : (
                      <Copy
                        size={15}
                        className="shrink-0 opacity-60 transition-opacity group-hover:opacity-100"
                      />
                    )}
                  </button>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-100">
                  <Clock3 size={17} />
                </span>

                <div className="text-sm leading-7">
                  <p className="font-medium text-white">
                    ساعات پاسخ‌گویی
                  </p>
                  <p className="text-white/70">
                    شنبه تا چهارشنبه، ۸ تا ۱۴
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-white/15 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-7 text-white/70">
            ©{" "}
            {new Intl.NumberFormat("fa-IR").format(
              new Date().getFullYear(),
            )}{" "}
            <span className="font-bold text-white">
              مدرسه ادیبان
            </span>{" "}
            — تمامی حقوق محفوظ است.
          </p>

          <a
            href="#navbar"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            بازگشت به بالا
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
