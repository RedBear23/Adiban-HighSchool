import { ContactInfo } from "./ContactInfo";
import { ContactImages } from "./ContactImages";

export function ContactSection() {
  return (
    <section
      dir="rtl"
      className="bg-linear-to-br from-green-soft via-card to-blue-soft px-6 py-14 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            ارتباط با مدرسه
          </span>

          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            تماس با ما
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            برای هماهنگی و پیگیری امور مدرسه ادیبان می‌توانید در ساعات کاری با
            ما در ارتباط باشید.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <ContactInfo />
          <ContactImages />
        </div>
      </div>
    </section>
  );
}