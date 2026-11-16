import Hero from "@/components/home/hero/Hero";
import { PrincipalSection } from "@/components/home/principal/PrincipalSection";
import Statistics from "@/components/home/statistics/Statistics";
import { TeachersSection } from "@/components/home/teachers/TeachersSection";
import { TopStudentsSection } from "@/components/home/top_students/TopStudentsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Statistics />
      <TeachersSection featuredOnly/>
      <PrincipalSection />
      <TopStudentsSection />
    </main>
  );
}