import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <main
      dir="rtl"
      className="flex min-h-screen items-center justify-center bg-background px-6 py-12"
    >
      <div className="w-full max-w-lg text-center">
        {/* Logo */}
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-soft text-primary">
          <BookOpen size={32} strokeWidth={1.8} />
        </div>

        {/* 404 */}
        <div className="relative mb-6">
          <h1 className="select-none text-[120px] leading-none font-black tracking-tighter text-primary/15 sm:text-[160px]">
            404
          </h1>

          <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-foreground sm:text-3xl">
            صفحه پیدا نشد!
          </p>
        </div>

        {/* Description */}
        <div className="space-y-3">
          <p className="text-lg font-semibold text-foreground">
            انگار مسیر را اشتباه آمده‌ای!
          </p>

          <p className="mx-auto max-w-sm text-sm leading-7 text-muted-foreground">
            صفحه‌ای که دنبالش هستی وجود ندارد یا ممکن است آدرس آن تغییر کرده
            باشد.
          </p>
        </div>

        {/* Back Home */}
        <Link
          href="/"
          className="mx-auto mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          بازگشت به صفحه اصلی
          <ArrowLeft size={18} />
        </Link>

        {/* Footer */}
        <p className="mt-12 text-xs text-muted-foreground">
          وب‌سایت مدرسه ادیبان
        </p>
      </div>
    </main>
  );
}