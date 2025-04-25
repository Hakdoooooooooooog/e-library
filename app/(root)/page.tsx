import HeroSection from "@/components/hero-section";
import { HistorySection } from "@/components/History/history-section";
import ServicesSection from "@/components/services-section";
import VisionMissionSection from "@/components/vision-mission-section";

export default function Home() {
  return (
    <>
      <section id="home" className="section-container p-0">
        <HeroSection />
      </section>

      <section id="services" className="section-container justify-start">
        <ServicesSection />
      </section>

      <section id="vision-mission" className="section-container">
        <VisionMissionSection />
      </section>

      <section id="history" className="section-container p-0">
        <HistorySection />
      </section>
    </>
  );
}
