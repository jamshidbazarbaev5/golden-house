import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import NewsSection from "@/components/NewsSection";
import StatsSection from "@/components/StatsSection";
import CallbackSection from "@/components/CallbackSection";
import TelegramSection from "@/components/TelegramSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProjectsSection />
      <NewsSection />
      <CallbackSection />
      <TelegramSection />
    </>
  );
}
