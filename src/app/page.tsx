import Breadcrumb from "@/components/Breadcrumb";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import ProjectShowcaseSection from "@/components/ProjectShowcaseSection";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <>
      <Breadcrumb items={[{ label: "Бош саҳифа" }]} />
      <HeroSection />
      <VideoSection />
      <ProjectShowcaseSection />
      <NewsSection />
    </>
  );
}
