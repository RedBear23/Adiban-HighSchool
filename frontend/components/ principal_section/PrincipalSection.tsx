import { principal_data } from "./principal_data";

export function PrincipalSection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-8 text-right">


          <h2 className="inline-block max-w-full rounded-full bg-primary p-5 mt-2 text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            آشنایی با مدیر مدرسه
          </h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        {/* Main Content */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-green-soft via-card to-blue-soft px-6 py-8 shadow-sm sm:px-10 sm:py-10 lg:px-12 lg:py-12">
          {/* Decorative Background */}
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-secondary-blue/10 blur-3xl"
          />

          <div
            dir="ltr"
            className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14"
          >
            {/* Principal Image — Left */}
            <div className="relative mx-auto w-full max-w-sm">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -left-3 h-20 w-20 rounded-2xl bg-secondary-blue/20"
              />

              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 h-20 w-20 rounded-2xl bg-primary/20"
              />

              <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border bg-card shadow-md">
                <img
                  src={principal_data.image}
                  alt={principal_data.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Principal Information — Right */}
            <div dir="rtl" className="text-right">
              <div className="mb-5 flex items-center justify-end gap-3">
                <span className="text-sm font-medium text-secondary-blue">
                  درباره مدیر مدرسه
                </span>

                <span className="h-px w-10 bg-primary" />
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                {principal_data.name}
              </h3>

              <p className="mt-2 text-base font-medium text-primary">
                {principal_data.role}
              </p>

              <div className="my-6 h-px w-full bg-border" />

              <p className="text-base leading-8 text-muted-foreground sm:text-lg">
                {principal_data.description}
              </p>

              {/* Quote */}
              <div className="mt-7 rounded-2xl border-r-4 border-primary bg-card/80 px-5 py-4 shadow-sm">
                <p className="text-sm leading-7 text-dark sm:text-base">
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