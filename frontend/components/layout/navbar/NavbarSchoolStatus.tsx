"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

import type { SchoolStatus as SchoolStatusType } from "@/types/school_status";
import { getSchoolStatus } from "@/services/school_status_services";

export function SchoolStatus() {
  const [schoolStatus, setSchoolStatus] =
    useState<SchoolStatusType | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchSchoolStatus() {
      try {
        const data = await getSchoolStatus();

        if (isMounted) {
          setSchoolStatus(data);
        }
      } catch {
        if (isMounted) {
          setSchoolStatus(null);
        }
      }
    }

    fetchSchoolStatus();

    const interval = setInterval(fetchSchoolStatus, 60_000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const isOpen = schoolStatus?.is_open;

return (
  <div
    role="status"
    aria-live="polite"
    className="flex items-center gap-2 rounded-xl bg-background px-3 py-2 text-sm font-medium"
  >
    <span
      className={`size-2 rounded-full ${
        schoolStatus === null
          ? "bg-muted-foreground"
          : isOpen
            ? "bg-primary"
            : "bg-destructive"
      }`}
    />

    <span className="text-foreground">
      {schoolStatus === null ? "نامشخص" : isOpen ? "باز" : "بسته"}
    </span>
  </div>
);
}