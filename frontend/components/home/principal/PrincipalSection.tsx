
import Image from "next/image";
import { principal_data } from "./principal_data";

export function PrincipalSection() {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8" id="principal">
      <div className="mx-auto md:max-w-2xl lg:max-w-6xl">
        {/* عنوان بخش */}
        <div className="mb-7 flex items-center gap-3">
          <div className="h-1 w-12 shrink-0 rounded-full bg-primary" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            آشنایی با مدیر مدرسه
          </h2>
        </div>

        {/* محتوای اصلی */}
        <div className="overflow-hidden rounded-3xl bg-linear-to-br from-green-soft via-card to-blue-soft p-5 shadow-sm sm:p-7 lg:p-10">
          <div
            dir="ltr"
            className="grid items-center gap-7 sm:gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12"
          >
            {/* تصویر مدیر */}
            <div className="relative mx-auto w-full max-w-65 lg:max-w-90">
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:aspect-auto lg:h-85">
                <Image
                  src={principal_data.image}
                  alt={principal_data.name}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>

            {/* اطلاعات مدیر */}
            <div dir="rtl" className="text-right">
              <span className="text-sm font-medium text-secondary-blue lg:text-base">
                مدیر مدرسه ادیبان
              </span>

              <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {principal_data.name}
              </h3>

              <div className="my-5 h-px w-full bg-border lg:my-6" />

              <p className="text-sm leading-8 text-muted-foreground sm:text-base lg:text-lg lg:leading-9">
                {principal_data.description}
              </p>

              {/* نقل‌قول مدیر */}
              <div className="mt-5 rounded-xl border-r-4 border-primary bg-card/70 px-4 py-3 sm:px-5 sm:py-4 lg:mt-7">
                <p className="text-sm leading-7 text-foreground sm:text-base lg:text-lg">
                  « {principal_data.quote} »
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
