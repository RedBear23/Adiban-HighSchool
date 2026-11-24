
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
  // عناصر اصلی جدول
  const mainElements = elements.filter(
    (element) =>
      element.category !== "lanthanide" &&
      element.category !== "actinide" &&
      element.group !== null,
  );

  // لانتان و اکتینیم در انتهای ردیف‌های اصلی قرار می‌گیرند.
  const lanthanum = elements.find((element) => element.atomicNumber === 57);
  const actinium = elements.find((element) => element.atomicNumber === 89);

  // بقیه لانتانیدها و اکتینیدها در ردیف‌های جداگانه نمایش داده می‌شوند.
  const lanthanides = elements.filter(
    (element) =>
      element.category === "lanthanide" &&
      element.atomicNumber !== 57,
  );

  const actinides = elements.filter(
    (element) =>
      element.category === "actinide" &&
      element.atomicNumber !== 89,
  );

  return (
    <div className="w-full overflow-x-auto pb-4" dir="ltr">
      <div
        className="
          relative
          grid min-w-345 sm:min-w-390
          grid-cols-[repeat(18,minmax(64px,1fr))]
          grid-rows-[repeat(9,minmax(0,auto))] sm:grid-rows-[repeat(9,minmax(88px,auto))]
          gap-1 sm:gap-2
        "
      >
        {/* عناصر اصلی جدول */}
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

        {/* لانتان؛ بعد از باریم */}
        {lanthanum && (
          <div
            style={{
              gridColumn: 3,
              gridRow: 6,
            }}
          >
            <ElementCell
              element={lanthanum}
              isSelected={
                selectedElement?.atomicNumber === lanthanum.atomicNumber
              }
              onSelect={onSelect}
            />
          </div>
        )}

        {/* اکتینیم؛ بعد از رادیم */}
        {actinium && (
          <div
            style={{
              gridColumn: 3,
              gridRow: 7,
            }}
          >
            <ElementCell
              element={actinium}
              isSelected={
                selectedElement?.atomicNumber === actinium.atomicNumber
              }
              onSelect={onSelect}
            />
          </div>
        )}

      {/* راهنمای دسته‌بندی عناصر */}
      <div
        className="absolute mt-8 sm:mt-24"
        style={{
          gridColumn: "3 / 13",
          gridRow: "1 / 4",
          inset: 0,
        }}
      >
        <ElementLegend />
      </div>

        {/* عنوان ردیف لانتانیدها */}
        <div
          dir="rtl"
          className="flex items-center justify-center text-xs font-semibold text-muted-foreground"
          style={{
            gridColumn: "3 / 4",
            gridRow: 8,
          }}
        >
          ردیف لانتانیدها
        </div>

        {/* عنوان ردیف اکتینیدها */}
        <div
          dir="rtl"
          className="flex items-center justify-center text-xs font-semibold text-muted-foreground"
          style={{
            gridColumn: "3 / 4",
            gridRow: 9,
          }}
        >
          ردیف اکتینیدها
        </div>

        {/* ردیف لانتانیدها */}
        {lanthanides.map((element, index) => (
          <div
            key={element.atomicNumber}
            className="mt-8"
            style={{
              gridColumn: index + 4,
              gridRow: 8,
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

        {/* ردیف اکتینیدها */}
        {actinides.map((element, index) => (
          <div
            key={element.atomicNumber}
            style={{
              gridColumn: index + 4,
              gridRow: 9,
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
      </div>
    </div>
  );
}
