import type { Teacher } from "@/types/teachers";

type TeacherCardProps = {
  teacher: Teacher;
};

export function TeacherCard({ teacher }: TeacherCardProps) {
  const fullName = [teacher.first_name, teacher.last_name]
    .filter(Boolean)
    .join(" ");

  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Teacher Image */}
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={teacher.image}
          alt={fullName}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-dark/60 to-transparent" />
      </div>

      {/* Teacher Information */}
      <div className="p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {teacher.subjects.map((subject) => (
            <span
              key={subject}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              دبیر {subject}
            </span>
          ))}
        </div>

        <h2 className="text-xl font-bold tracking-tight text-card-foreground">
          استاد {fullName}
        </h2>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
          {teacher.short_description}
        </p>
      </div>
    </article>
  );
}