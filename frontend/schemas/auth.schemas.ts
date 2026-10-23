import { z } from "zod";

export const registerSchema = z.object({
  national_id: z
    .string()
    .trim()
    .min(10, "کد ملی باید ۱۰ رقم باشد.")
    .max(10, "کد ملی باید ۱۰ رقم باشد.")
    .regex(/^\d{10}$/, "کد ملی باید فقط شامل ۱۰ رقم باشد."),

  first_name: z
    .string()
    .trim()
    .min(2, "نام باید حداقل ۲ حرف باشد.")
    .max(50, "نام نمی‌تواند بیشتر از ۵۰ حرف باشد."),

  last_name: z
    .string()
    .trim()
    .min(2, "نام خانوادگی باید حداقل ۲ حرف باشد.")
    .max(50, "نام خانوادگی نمی‌تواند بیشتر از ۵۰ حرف باشد."),

  phone_number: z
    .string()
    .trim()
    .regex(
      /^09\d{9}$/,
      "شماره موبایل معتبر وارد کنید.",
    ),

  password: z
    .string()
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد.")
    .max(128, "رمز عبور نمی‌تواند بیشتر از ۱۲۸ کاراکتر باشد."),

  profile_picture: z
    .instanceof(File)
    .nullable()
    .optional(),
});

export const loginSchema = z.object({
  national_id: z
    .string()
    .trim()
    .min(10, "کد ملی باید ۱۰ رقم باشد.")
    .max(10, "کد ملی باید ۱۰ رقم باشد.")
    .regex(/^\d{10}$/, "کد ملی باید فقط شامل ۱۰ رقم باشد."),

  password: z
    .string()
    .min(1, "رمز عبور را وارد کنید."),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
export type LoginFormValues = z.infer<typeof loginSchema>;