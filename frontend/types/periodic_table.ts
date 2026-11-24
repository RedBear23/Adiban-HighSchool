// دسته‌بندی عناصر برای تشخیص نوع و رنگ آن‌ها در جدول
export type ElementCategory =
  | "alkali-metal" // فلز قلیایی
  | "alkaline-earth-metal" // فلز قلیایی خاکی
  | "transition-metal" // فلز واسطه
  | "post-transition-metal" // فلز پس‌واسطه
  | "metalloid" // شبه‌فلز
  | "nonmetal" // نافلز
  | "halogen" // هالوژن
  | "noble-gas" // گاز نجیب
  | "lanthanide" // لانتانید
  | "actinide"; // اکتینید

// حالت فیزیکی عنصر
export type ElementState =
  | "solid" // جامد
  | "liquid" // مایع
  | "gas" // گاز
  | "unknown"; // نامشخص

// ویژگی‌های فیزیکی و شیمیایی عنصر
export interface ElementProperties {
  color?: string; // رنگ عنصر
  state?: ElementState; // حالت فیزیکی
  density?: number | null; // چگالی
  reactivity?: string; // واکنش‌پذیری
  uses?: string[]; // کاربردهای عنصر
}

// اطلاعات هر عنصر جدول تناوبی
export interface PeriodicElement {
  atomicNumber: number; // عدد اتمی
  symbol: string; // نماد شیمیایی
  english_name: string; // نام عنصر
  persian_name: string; // نام عنصر

  category: ElementCategory; // دسته‌بندی عنصر

  period: number; // شماره دوره
  group: number | null; // شماره گروه

  electronConfiguration: string; // آرایش الکترونی کامل
  nobleGasConfiguration: string; // آرایش الکترونی فشرده

  atomicMass: number | null; // جرم اتمی
  averageAtomicMass: number | null; // جرم اتمی میانگین
  molarMass: number | null; // جرم مولی

  imageUrl?: string; // آدرس تصویر عنصر

  properties: ElementProperties; // ویژگی‌های فیزیکی و شیمیایی
}