
"use client";

import { useState } from "react";
import type { PeriodicElement } from "@/types/periodic_table";

import { PeriodicTableGrid } from "./PeriodicTableGrid";
import { ElementDetails } from "./ElementDetails";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

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
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          جدول تناوبی عناصر
        </h1>

        <p className="text-sm leading-7 text-muted-foreground">
          با انتخاب هر عنصر، اطلاعات علمی و ویژگی‌های فیزیکی و شیمیایی آن را
          مشاهده کنید.
        </p>
      </header>

      <section>

        <PeriodicTableGrid
          elements={elements}
          selectedElement={selectedElement}
          onSelect={setSelectedElement}
        />
      </section>

      {/* مودال اطلاعات عنصر */}
      <Dialog
        open={selectedElement !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedElement(null);
          }
        }}
      >
        <DialogContent
          className="
            max-h-[85vh]
            w-[calc(100%-2rem)]
            max-w-3xl
            overflow-y-auto
            p-4 sm:p-5
          "
        >
          <DialogTitle className="sr-only">
            اطلاعات عنصر {selectedElement?.persian_name}
          </DialogTitle>

          {selectedElement && (
            <ElementDetails element={selectedElement} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
