import { AboutHero } from "@/components/home/about/AboutHero";
import { SchoolStory } from "@/components/home/about/SchoolStory";
import { SupervisorStory } from "@/components/home/about/SupervisorStory";


export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <SupervisorStory />
      <SchoolStory />
    </main>
  );
}