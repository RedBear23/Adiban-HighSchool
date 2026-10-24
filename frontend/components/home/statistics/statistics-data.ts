import {
  BookOpen,
  GraduationCap,
  School,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface Statistic {
  id: number;
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
  color: "green" | "blue";
}

export const statistics: Statistic[] = [
  {
    id: 1,
    value: "160+",
    label: "دانش‌آموز",
    description: "دانش‌آموزان فعال مدرسه",
    icon: GraduationCap,
    color: "green",
  },
  {
    id: 2,
    value: "20+",
    label: "معلم",
    description: "اعضای کادر آموزشی",
    icon: Users,
    color: "blue",
  },
  {
    id: 3,
    value: "13+",
    label: "کلاس",
    description: "کلاس‌های فعال مدرسه",
    icon: School,
    color: "green",
  },
  {
    id: 4,
    value: "2+",
    label: "رشته تحصیلی",
    description: "رشته‌های ارائه‌شده",
    icon: BookOpen,
    color: "blue",
  },
];