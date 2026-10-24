import type { Statistic } from "./statistics-data";

interface StatisticsCardProps {
  statistic: Statistic;
}

export default function StatisticsCard({
  statistic,
}: StatisticsCardProps) {
  const Icon = statistic.icon;

  const isGreen = statistic.color === "green";

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        isGreen
          ? "border-primary/15 hover:border-primary/30"
          : "border-secondary-blue/15 hover:border-secondary-blue/30"
      }`}
    >
      {/* Accent */}
      <div
        className={`absolute right-0 top-0 h-1 w-full ${
          isGreen ? "bg-primary" : "bg-secondary-blue"
        }`}
      />

      <div className="flex items-start justify-between gap-4">
        {/* Icon */}
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
            isGreen
              ? "bg-green-soft text-primary-dark"
              : "bg-blue-soft text-blue-dark"
          }`}
        >
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>

        {/* Number */}
        <div className="text-left" dir="ltr">
          <p className="text-3xl font-bold tracking-tight text-navy">
            {statistic.value}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-bold text-dark">
          {statistic.label}
        </h3>

        <p className="mt-1 text-sm text-gray">
          {statistic.description}
        </p>
      </div>
    </div>
  );
}