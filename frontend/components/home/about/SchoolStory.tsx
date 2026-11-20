
export function SchoolStory() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8" dir="rtl">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          {/* عنوان بخش */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-1 w-12 shrink-0 rounded-full bg-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              درباره مدرسه ادیبان
            </h2>
          </div>

          {/* توضیحات مدرسه */}
          <div className="space-y-4 text-sm leading-8 text-muted-foreground sm:text-base sm:leading-9">
            <p>
              مدرسه ادیبان در شهر اهواز فعالیت خود را در مقاطع هفتم تا
              دوازدهم دنبال می‌کند. این مجموعه با همراهی کادر آموزشی و
              اجرایی، بستری برای یادگیری و رشد دانش‌آموزان فراهم کرده است.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}