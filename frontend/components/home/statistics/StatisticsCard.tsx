import {
  GraduationCap,
  School,
  Users,
  CalendarDays,
} from "lucide-react";

type StatisticsCardProps = {
  label: string;
  value: number;
  description: string;
  color: "green" | "blue";
};

const icons = {
  teachers: GraduationCap,
  students: Users,
  classes: School,
  years: CalendarDays,
};

export default function StatisticsCard({
  label,
  value,
  description,
  color,
}: StatisticsCardProps) {
  const Icon =
    label === "معلمان"
      ? icons.teachers
      : label === "دانش‌آموزان"
        ? icons.students
        : label === "کلاس‌ها"
          ? icons.classes
          : icons.years;

  const isGreen = color === "green";

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
            {value}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-bold text-dark">
          {label}
        </h3>

        <p className="mt-1 text-sm text-gray">
          {description}
        </p>
      </div>
    </div>
  );
}