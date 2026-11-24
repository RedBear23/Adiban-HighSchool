
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
    return null;
  }

  return (
    <section className="w-full space-y-3" dir="rtl">
      {/* اطلاعات اصلی عنصر */}
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="flex size-20 flex-col items-center justify-center rounded-xl border border-border bg-muted/50">
          <span className="text-[10px] text-muted-foreground">
            {element.atomicNumber}
          </span>

          <span className="text-3xl font-bold text-primary">
            {element.symbol}
          </span>

          <span className="text-xs text-muted-foreground">
            {element.persian_name}
          </span>
        </div>

        <div className="space-y-1">
          <h2 className="text-lg font-bold text-foreground">
            {element.persian_name}
          </h2>

          <p className="text-xs text-muted-foreground">
            {element.english_name}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
            {categoryLabels[element.category]}
          </span>

          <span className="rounded-full bg-muted px-3 py-1 text-[11px] text-muted-foreground">
            دوره {element.period}
          </span>

          {element.group !== null && (
            <span className="rounded-full bg-muted px-3 py-1 text-[11px] text-muted-foreground">
              گروه {element.group}
            </span>
          )}
        </div>
      </div>

      {/* آرایش الکترونی */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-center text-foreground">
          آرایش الکترونی
        </h3>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
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
    <div className="rounded-lg border border-border bg-muted/30 px-3 py-2 text-center">
      <p className="text-[11px] text-muted-foreground">
        {title}
      </p>

      <div className="mt-1 flex items-center justify-center gap-1">
        <p className="wrap-break-word text-sm font-semibold text-foreground">
          {value}
        </p>
      </div>
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
    <div className="min-w-0 rounded-lg border border-border bg-muted/30 p-3 text-center">
      <p className="mb-2 text-[11px] text-muted-foreground">
        {title}
      </p>

      <p
        dir="ltr"
        className="wrap-break-word text-center text-xs font-medium leading-6 text-foreground"
      >
        {value || "اطلاعات موجود نیست"}
      </p>
    </div>
  );
}
