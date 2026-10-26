import { z } from "zod";

function normalizePersianDigits(value: unknown) {
  if (typeof value !== "string") {
    return value;
  }

  return value.replace(/[۰-۹]/g, (digit) =>
    String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)),
  );
}

const nationalIdSchema = z.preprocess(
  normalizePersianDigits,
  z
    .string()
    .trim()
    .length(10, "کد ملی باید ۱۰ رقم باشد.")
    .regex(
      /^\d{10}$/,
      "کد ملی باید فقط شامل ۱۰ رقم باشد.",
    ),
);

const phoneNumberSchema = z.preprocess(
  normalizePersianDigits,
  z
    .string()
    .trim()
    .regex(
      /^09\d{9}$/,
      "شماره موبایل معتبر وارد کنید.",
    ),
);

const persianNameSchema = z
  .string()
  .trim()
  .min(2, "نام باید حداقل ۲ حرف باشد.")
  .max(50, "نام نمی‌تواند بیشتر از ۵۰ حرف باشد.")
  .regex(
    /^[آ-یء‌]+(?: [آ-یء‌]+)*$/,
    "این قسمت باید فقط شامل حروف فارسی باشد.",
  );

export const registerSchema = z.object({
  national_id: nationalIdSchema,

  first_name: persianNameSchema,

  last_name: z
    .string()
    .trim()
    .min(2, "نام خانوادگی باید حداقل ۲ حرف باشد.")
    .max(50, "نام خانوادگی نمی‌تواند بیشتر از ۵۰ حرف باشد.")
    .regex(
      /^[آ-یء‌]+(?: [آ-یء‌]+)*$/,
      "نام خانوادگی باید فقط شامل حروف فارسی باشد.",
    ),

  phone_number: phoneNumberSchema,

  password: z
    .string()
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد.")
    .max(
      128,
      "رمز عبور نمی‌تواند بیشتر از ۱۲۸ کاراکتر باشد.",
    ),

  profile_picture: z
    .instanceof(File)
    .nullable()
    .optional(),
});

export const loginSchema = z.object({
  national_id: nationalIdSchema,

  password: z
    .string()
    .min(1, "رمز عبور را وارد کنید."),
});

export type RegisterFormValues =
  z.infer<typeof registerSchema>;

export type LoginFormValues =
  z.infer<typeof loginSchema>;