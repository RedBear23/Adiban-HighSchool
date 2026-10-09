import { PrincipalSection } from "@/components/ principal_section/PrincipalSection";
import { Footer } from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Statistics from "@/components/statistics/Statistics";
import { TeachersSection } from "@/components/teachers_section/TeachersSection";
import { TopStudentsSection } from "@/components/top_students_section/TopStudentsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Statistics />
      <TeachersSection/>
      <PrincipalSection/>
      <TopStudentsSection/>
      <Footer/>
    </main>
  );
}