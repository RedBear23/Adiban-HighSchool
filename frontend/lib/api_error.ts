import axios from "axios";

export type ApiFieldErrors = Record<
  string,
  string[]
>;

export function getApiFieldErrors(
  error: unknown,
): ApiFieldErrors {
  if (!axios.isAxiosError(error)) {
    return {};
  }

  const data = error.response?.data;

  if (!data || typeof data !== "object") {
    return {};
  }

  const errors: ApiFieldErrors = {};

  for (const [field, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      errors[field] = value.map(String);
      continue;
    }

    if (typeof value === "string") {
      errors[field] = [value];
    }
  }

  return errors;
}

export function getApiErrorMessage(
  error: unknown,
  fallback = "خطایی رخ داده است.",
): string {
  const errors = getApiFieldErrors(error);

  if (errors.detail?.[0]) {
    return errors.detail[0];
  }

  if (errors.non_field_errors?.[0]) {
    return errors.non_field_errors[0];
  }

  const firstError = Object.values(errors)[0]?.[0];

  return firstError ?? fallback;
}