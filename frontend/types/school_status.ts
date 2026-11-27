export type SchoolStatusMode = "automatic" | "open" | "closed";

export type SchoolStatusValue = "open" | "closed";

export interface SchoolStatus {
  mode: SchoolStatusMode;
  is_open: boolean;
  status: SchoolStatusValue;
}