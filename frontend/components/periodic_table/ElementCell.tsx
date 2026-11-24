import type { PeriodicElement } from "@/types/periodic_table";

interface ElementCellProps {
  element: PeriodicElement;
  isSelected: boolean;
  onSelect: (element: PeriodicElement) => void;
}

export function ElementCell({
  element,
  isSelected,
  onSelect,
}: ElementCellProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(element)}
      aria-label={`${element.persian_name} (${element.symbol})`}
      aria-pressed={isSelected}
      data-category={element.category}
      className={`
        element-cell relative flex h-full min-h-22 w-full
        flex-col items-center justify-between
        rounded-xl border p-2 pt-5 pb-2
        text-center transition-all duration-200
        hover:z-10 hover:-translate-y-0.5 hover:shadow-md
        focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-primary
        ${isSelected ? "ring-2 ring-primary ring-offset-2" : ""}
      `}
    >
      <span className="absolute left-2 top-1.5 text-[10px] font-medium opacity-75">
        {element.atomicNumber}
      </span>

      <span className="text-2xl font-bold leading-none sm:text-3xl">
        {element.symbol}
      </span>

      <span className="line-clamp-2 flex min-h-7 w-full items-center justify-center text-[10px] leading-4 sm:text-xs">
        {element.persian_name}
      </span>
    </button>
  );
}