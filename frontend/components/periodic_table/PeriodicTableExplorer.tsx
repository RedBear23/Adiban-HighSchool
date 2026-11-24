"use client";

import { useState } from "react";

import type { PeriodicElement } from "@/types/periodic_table";

import { PeriodicTableGrid } from "./PeriodicTableGrid";
import { ElementDetails } from "./ElementDetails";

interface PeriodicTableExplorerProps {
  elements: PeriodicElement[];
}

export function PeriodicTableExplorer({
  elements,
}: PeriodicTableExplorerProps) {
  const [selectedElement, setSelectedElement] =
    useState<PeriodicElement | null>(null);

  return (
    <div className="space-y-8">
      {/* عنوان صفحه */}
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          جدول تناوبی عناصر ادیبان
        </h1>

        <p className="text-sm leading-7 text-muted-foreground">
          با انتخاب هر عنصر، اطلاعات علمی و ویژگی‌های فیزیکی و شیمیایی آن را
          مشاهده کنید.
        </p>
      </header>

      {/* جدول تناوبی */}
      <section className="space-y-4">

        <PeriodicTableGrid
          elements={elements}
          selectedElement={selectedElement}
          onSelect={setSelectedElement}
        />
      </section>

      {/* جزئیات عنصر */}
      <ElementDetails element={selectedElement} />
    </div>
  );
}