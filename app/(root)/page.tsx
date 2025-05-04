import AboutUs from "@/components/about-us-section";
import HeroSection from "@/components/hero-section";
import { HistorySection } from "@/components/History/history-section";
import ServicesSection from "@/components/services-section";
import VisionMissionSection from "@/components/vision-mission-section";

export default async function Home() {
  return (
    <>
      <section id="home" className="section-container p-0">
        <HeroSection />
      </section>

      <section
        id="services"
        className="section-container justify-start max-sm:p-8"
      >
        <ServicesSection />
      </section>

      <section id="vision-mission" className="section-container max-sm:p-8">
        <VisionMissionSection />
      </section>

      <section id="about-us" className="section-container max-sm:p-8">
        <AboutUs />
      </section>

      <section id="history" className="section-container p-0">
        <HistorySection />
      </section>
    </>
  );
}
