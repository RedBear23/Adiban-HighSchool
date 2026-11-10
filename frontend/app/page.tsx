import { PrincipalSection } from "@/components/principal/PrincipalSection";
import Hero from "@/components/home/hero/Hero";
import Statistics from "@/components/home/statistics/Statistics";
import { TeachersSection } from "@/components/teachers/TeachersSection";
import { TopStudentsSection } from "@/components/home/top_students_section/TopStudentsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Statistics />
      <TeachersSection />
      <PrincipalSection />
      <TopStudentsSection />
    </main>
  );
}