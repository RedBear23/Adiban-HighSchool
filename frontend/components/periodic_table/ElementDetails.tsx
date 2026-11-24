import type {
  ElementCategory,
  PeriodicElement,
} from "@/types/periodic_table";

import { ElementProperties } from "./ElementProperties";

interface ElementDetailsProps {
  element: PeriodicElement | null;
}

const categoryLabels: Record<ElementCategory, string> = {
  "alkali-metal": "فلز قلیایی",
  "alkaline-earth-metal": "فلز قلیایی خاکی",
  "transition-metal": "فلز واسطه",
  "post-transition-metal": "فلز پس‌واسطه",
  metalloid: "شبه‌فلز",
  nonmetal: "نافلز",
  halogen: "هالوژن",
  "noble-gas": "گاز نجیب",
  lanthanide: "لانتانید",
  actinide: "اکتینید",
};

function formatMass(value: number | null): string {
  if (value === null) {
    return "اطلاعات موجود نیست";
  }

  return value.toLocaleString("en-US");
}

export function ElementDetails({ element }: ElementDetailsProps) {
  if (!element) {
    return (
      <section className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center">
        <span className="mb-3 text-4xl text-muted-foreground">⚛</span>

        <h2 className="text-lg font-semibold text-foreground">
          یک عنصر را انتخاب کنید
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          برای مشاهده اطلاعات و ویژگی‌های هر عنصر، روی آن در جدول تناوبی کلیک کنید.
        </p>
      </section>
    );
  }

  return (
    <section
      className="space-y-6 rounded-2xl border border-border bg-card p-5 sm:p-7"
      dir="rtl"
    >
      {/* اطلاعات اصلی عنصر */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="flex size-28 shrink-0 flex-col items-center justify-center rounded-2xl border border-border bg-muted/50">
          <span className="text-xs text-muted-foreground">
            {element.atomicNumber}
          </span>

          <span className="text-4xl font-bold text-primary">
            {element.symbol}
          </span>

          <span className="text-sm text-muted-foreground">
            {element.persian_name}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm text-muted-foreground">
            {element.english_name}
          </p>

          <h2 className="mt-1 text-2xl font-bold text-foreground">
            {element.persian_name}
          </h2>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {categoryLabels[element.category]}
            </span>

            <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
              دوره {element.period}
            </span>

            {element.group !== null && (
              <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                گروه {element.group}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* جرم‌ها */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold text-foreground">
          اطلاعات جرمی
        </h3>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <MassCard
            title="جرم اتمی"
            value={formatMass(element.atomicMass)}
          />

          <MassCard
            title="جرم اتمی میانگین"
            value={formatMass(element.averageAtomicMass)}
          />

          <MassCard
            title="جرم مولی"
            value={formatMass(element.molarMass)}
            unit="g/mol"
          />
        </div>
      </div>

      {/* آرایش الکترونی */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold text-foreground">
          آرایش الکترونی
        </h3>

        <div className="space-y-3">
          <ConfigurationCard
            title="آرایش الکترونی کامل"
            value={element.electronConfiguration}
          />

          <ConfigurationCard
            title="آرایش الکترونی فشرده"
            value={element.nobleGasConfiguration}
          />
        </div>
      </div>

      {/* ویژگی‌های فیزیکی و شیمیایی */}
      <ElementProperties properties={element.properties} />
    </section>
  );
}

interface MassCardProps {
  title: string;
  value: string;
  unit?: string;
}

function MassCard({ title, value, unit }: MassCardProps) {
  return (
    <div className="rounded-xl border border-border bg-muted/30 p-4">
      <p className="text-xs text-muted-foreground">{title}</p>

      <p className="mt-2 wrap-break-word text-lg font-semibold text-foreground">
        {value}
      </p>

      {unit && (
        <span className="text-xs text-muted-foreground">{unit}</span>
      )}
    </div>
  );
}

interface ConfigurationCardProps {
  title: string;
  value: string;
}

function ConfigurationCard({
  title,
  value,
}: ConfigurationCardProps) {
  return (
    <div className="rounded-xl border border-border bg-muted/30 p-4">
      <p className="mb-2 text-xs text-muted-foreground">{title}</p>

      <p
        dir="ltr"
        className="overflow-x-auto whitespace-nowrap text-sm font-medium text-foreground"
      >
        {value || "اطلاعات موجود نیست"}
      </p>
    </div>
  );
}