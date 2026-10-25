import { PrincipalSection } from "@/components/principal/PrincipalSection";
import Hero from "@/components/home/hero/Hero";
import Statistics from "@/components/home/statistics/Statistics";
import { TeachersPage } from "@/components/teachers/TeachersSection";
import { TopStudentsSection } from "@/components/home/top_students_section/TopStudentsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Statistics />
      <TeachersPage/>
      <PrincipalSection/>
      <TopStudentsSection/>
    </main>
  );
}