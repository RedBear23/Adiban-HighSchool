import type { Teacher } from "./teacher_data";

type TeacherCardProps = {
  teacher: Teacher;
};

export function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <article className="overflow-hidden rounded-xl bg-card">
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={teacher.image}
          alt={teacher.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-5">
        <p className="mb-1 text-sm font-medium text-primary">
          {teacher.subject}
        </p>

        <h3 className="text-xl font-semibold text-card-foreground">
          {teacher.name}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
          {teacher.description}
        </p>
      </div>
    </article>
  );
}