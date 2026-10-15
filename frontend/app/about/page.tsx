import { AboutHero } from "@/components/about_page/AboutHero";
import { SchoolStory } from "@/components/about_page/SchoolStory";
import { SupervisorStory } from "@/components/about_page/SupervisorStory";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <SupervisorStory />
      <SchoolStory />
    </main>
  );
}