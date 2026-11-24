import { elements } from "@/data/periodic_table/elements";
import { PeriodicTableExplorer } from "@/components/periodic_table/PeriodicTableExplorer";

export default function PeriodicTablePage() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">
        <PeriodicTableExplorer elements={elements} />
      </div>
    </main>
  );
}