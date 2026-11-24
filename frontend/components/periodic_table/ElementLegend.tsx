import type { ElementCategory } from "@/types/periodic_table";

interface LegendItem {
  category: ElementCategory;
  label: string;
}

const legendItems: LegendItem[] = [
  { category: "alkali-metal", label: "فلز قلیایی" },
  { category: "alkaline-earth-metal", label: "فلز قلیایی خاکی" },
  { category: "transition-metal", label: "فلز واسطه" },
  { category: "post-transition-metal", label: "فلز پس‌واسطه" },
  { category: "metalloid", label: "شبه‌فلز" },
  { category: "nonmetal", label: "نافلز" },
  { category: "halogen", label: "هالوژن" },
  { category: "noble-gas", label: "گاز نجیب" },
  { category: "lanthanide", label: "لانتانید" },
  { category: "actinide", label: "اکتینید" },
];

export function ElementLegend() {
  return (
    <div
      dir="rtl"
      aria-label="راهنمای دسته‌بندی عناصر"
      className="
        grid w-full grid-cols-2 gap-x-4 gap-y-3
        rounded-2xl border border-border
        bg-card/95 p-4 shadow-sm
      "
    >
      {legendItems.map((item) => (
        <div
          key={item.category}
          className="flex min-w-0 items-center gap-2"
        >
        <span
          data-category={item.category}
          className="element-legend-swatch size-5 shrink-0 rounded-md border"
          aria-hidden="true"
        />

        <span className="truncate text-sm font-medium text-muted-foreground">
          {item.label}
        </span>
        </div>
      ))}
    </div>
  );
}