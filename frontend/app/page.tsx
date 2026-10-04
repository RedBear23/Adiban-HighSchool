import Hero from "@/components/hero/Hero";
import Statistics from "@/components/statistics/Statistics";
import { TeachersSection } from "@/components/teachers_section/TeachersSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Statistics />
      <TeachersSection/>
    </main>
  );
}