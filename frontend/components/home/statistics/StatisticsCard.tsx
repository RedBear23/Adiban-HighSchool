import type { LucideIcon } from "lucide-react";

type StatisticsCardProps = {
  label: string;
  value: number;
  description: string;
  icon: LucideIcon;
  color: "green" | "blue";
};

export default function StatisticsCard({
  label,
  value,
  description,
  icon: Icon,
  color,
}: StatisticsCardProps) {
  const isGreen = color === "green";

  return (
    <article
      className={`group h-full rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
        isGreen
          ? "border-primary/15 hover:border-primary/30"
          : "border-secondary-blue/15 hover:border-secondary-blue/30"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        {/* آیکون */}
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
            isGreen
              ? "bg-green-soft text-primary-dark"
              : "bg-blue-soft text-blue-dark"
          }`}
        >
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>

        {/* مقدار آمار */}
        <div className="text-left" dir="ltr">
          <p className="text-3xl font-bold tracking-tight text-navy">
            {value}
          </p>
        </div>
      </div>

      {/* توضیحات */}
      <div className="mt-6">
        <h3 className="text-lg font-bold text-dark">
          {label}
        </h3>

        <p className="mt-1 text-sm leading-6 text-gray">
          {description}
        </p>
      </div>
    </article>
  );
}
