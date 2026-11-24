
import type {
  ElementProperties as ElementPropertiesType,
  ElementState,
} from "@/types/periodic_table";

interface ElementPropertiesProps {
  properties: ElementPropertiesType;
}

const stateLabels: Record<ElementState, string> = {
  solid: "جامد",
  liquid: "مایع",
  gas: "گاز",
  unknown: "نامشخص",
};

export function ElementProperties({
  properties,
}: ElementPropertiesProps) {
  const hasProperties =
    properties.color ||
    properties.state ||
    properties.density !== undefined ||
    properties.reactivity ||
    (properties.uses && properties.uses.length > 0);

  if (!hasProperties) {
    return (
      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-center text-foreground">
          ویژگی‌های فیزیکی و شیمیایی
        </h3>

        <p className="rounded-lg border border-border bg-muted/30 p-3 text-center text-xs text-muted-foreground">
          اطلاعاتی برای این عنصر ثبت نشده است.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-3">
      <h3 className="text-sm font-semibold text-center text-foreground">
        ویژگی‌های فیزیکی و شیمیایی
      </h3>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {properties.color && (
          <PropertyCard title="رنگ">
            {properties.color}
          </PropertyCard>
        )}

        {properties.state && (
          <PropertyCard title="حالت فیزیکی">
            {stateLabels[properties.state]}
          </PropertyCard>
        )}

        {properties.density !== undefined && (
          <PropertyCard title="چگالی">
            {properties.density === null
              ? "اطلاعات موجود نیست"
              : `${properties.density} g/cm³`}
          </PropertyCard>
        )}

        {properties.reactivity && (
          <PropertyCard title="واکنش‌پذیری">
            {properties.reactivity}
          </PropertyCard>
        )}
      </div>

      {properties.uses && properties.uses.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-center text-foreground">
            کاربردها
          </h4>

          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {properties.uses.map((use, index) => (
              <li
                key={`${index}-${use}`}
                className="flex items-center justify-center gap-2 rounded-lg border border-border bg-muted/30 p-2 text-center text-xs text-muted-foreground"
              >
                <span
                  className="size-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />

                <span>{use}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

interface PropertyCardProps {
  title: string;
  children: React.ReactNode;
}

function PropertyCard({ title, children }: PropertyCardProps) {
  return (
    <div className="rounded-lg border border-border bg-muted/30 p-3 text-center">
      <p className="mb-1 text-[11px] text-muted-foreground">
        {title}
      </p>

      <p className="text-xs font-medium leading-6 text-foreground">
        {children}
      </p>
    </div>
  );
}
