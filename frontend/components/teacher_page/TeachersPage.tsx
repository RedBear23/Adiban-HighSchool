import { TeacherCard } from "./TeacherCard";
import { teachers } from "../teachers_section/teacher_data";

export function TeachersPage() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8" dir="rtl">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-10 text-right">
          <h1 className="mt-2 inline-block max-w-full rounded-full bg-primary p-5 text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            معلمان مدرسه ادیبان
          </h1>

          <div className="mt-4 h-1 w-16 rounded-full bg-primary" />

          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            با معلمان مدرسه ادیبان، تخصص آن‌ها و نقششان در مسیر یادگیری و
            پیشرفت دانش‌آموزان آشنا شوید.
          </p>
        </div>

        {/* Teachers List */}
        <div className="space-y-8 sm:space-y-10">
          {teachers.map((teacher, index) => (
            <TeacherCard
              key={teacher.id}
              teacher={teacher}
              imageOnRight={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}