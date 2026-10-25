import { AboutHero } from "@/components/about/AboutHero";
import { SchoolStory } from "@/components/about/SchoolStory";
import { SupervisorStory } from "@/components/about/SupervisorStory";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <SupervisorStory />
      <SchoolStory />
    </main>
  );
}