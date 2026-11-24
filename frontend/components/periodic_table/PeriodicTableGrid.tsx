
import type { PeriodicElement } from "@/types/periodic_table";
import { ElementCell } from "./ElementCell";
import { ElementLegend } from "./ElementLegend";

interface PeriodicTableGridProps {
  elements: PeriodicElement[];
  selectedElement: PeriodicElement | null;
  onSelect: (element: PeriodicElement) => void;
}

export function PeriodicTableGrid({
  elements,
  selectedElement,
  onSelect,
}: PeriodicTableGridProps) {
  const mainElements = elements.filter(
    (element) =>
      element.category !== "lanthanide" &&
      element.category !== "actinide" &&
      element.group !== null,
  );

  const lanthanides = elements
    .filter((element) => element.category === "lanthanide")
    .sort((a, b) => a.atomicNumber - b.atomicNumber);

  const actinides = elements
    .filter((element) => element.category === "actinide")
    .sort((a, b) => a.atomicNumber - b.atomicNumber);

  return (
    <div className="w-full overflow-x-auto pb-4">
      <div
        dir="ltr"
        className="
          grid min-w-330
          grid-cols-[repeat(18,minmax(64px,1fr))]
          grid-rows-[repeat(9,minmax(88px,auto))]
          gap-2
        "
      >
        {mainElements.map((element) => (
          <div
            key={element.atomicNumber}
            style={{
              gridColumn: element.group!,
              gridRow: element.period,
            }}
          >
            <ElementCell
              element={element}
              isSelected={
                selectedElement?.atomicNumber === element.atomicNumber
              }
              onSelect={onSelect}
            />
          </div>
        ))}

        <div
          className="flex items-center justify-center"
          style={{ gridColumn: "3 / 13", gridRow: "2 / 4" }}
        >
          <ElementLegend />
        </div>

        {/* ردیف لانتانیدها */}
        <div
          dir="rtl"
          className="
            mt-6 flex items-center justify-center
            rounded-xl border border-dashed border-border
            bg-muted/50 p-2 text-xs font-semibold
            text-muted-foreground
          "
          style={{ gridColumn: "1 / 4", gridRow: 8 }}
        >
          لانتانیدها
        </div>

        {/* ردیف اکتینیدها */}
        <div
          dir="rtl"
          className="
            mt-6 flex items-center justify-center
            rounded-xl border border-dashed border-border
            bg-muted/50 p-2 text-xs font-semibold
            text-muted-foreground
          "
          style={{ gridColumn: "1 / 4", gridRow: 9 }}
        >
          اکتینیدها
        </div>

        {lanthanides.map((element, index) => (
          <div
            key={element.atomicNumber}
            className="mt-8"
            style={{ gridColumn: index + 4, gridRow: 8 }}
          >
            <ElementCell
              element={element}
              isSelected={
                selectedElement?.atomicNumber === element.atomicNumber
              }
              onSelect={onSelect}
            />
          </div>
        ))}

        {actinides.map((element, index) => (
          <div
            key={element.atomicNumber}
            style={{ gridColumn: index + 4, gridRow: 9 }}
          >
            <ElementCell
              element={element}
              isSelected={
                selectedElement?.atomicNumber === element.atomicNumber
              }
              onSelect={onSelect}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
