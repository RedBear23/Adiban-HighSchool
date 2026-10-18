import { Clock3, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="rounded-3xl bg-primary p-6 text-primary-foreground shadow-sm sm:p-8">
      <div className="mb-7">
        <h2 className="text-2xl font-bold">راه ارتباطی با مدرسه</h2>

        <p className="mt-2 text-sm leading-7 text-primary-foreground/80">
          برای پرسش، هماهنگی یا پیگیری امور مدرسه می‌توانید با ما تماس بگیرید.
        </p>
      </div>

      <div className="space-y-5">
        {/* Working Hours */}
        <div className="flex items-start gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/15">
            <Clock3 className="size-5" />
          </div>

          <div>
            <p className="font-semibold">ساعات پاسخگویی</p>
            <p className="mt-1 text-sm text-primary-foreground/80">
              روزهای کاری، از ساعت ۸ تا ۱۴
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/15">
            <Phone className="size-5" />
          </div>

          <div>
            <p className="font-semibold">شماره تماس</p>

            <a
              href="tel:9022879121"
              dir="ltr"
              className="mt-1 inline-block text-sm text-primary-foreground/80 transition hover:text-primary-foreground"
            >
              +902287912
            </a>
          </div>
        </div>
      </div>

      <a
        href="tel:06100000000"
        className="mt-8 flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
      >
        <Phone className="size-4" />
        تماس با مدرسه
      </a>
    </div>
  );
}