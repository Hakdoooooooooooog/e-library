import AboutUs from "@/components/About/about-us-section";
import HeroSection from "@/components/Hero/hero-section";
import { HistorySection } from "@/components/History/history-section";
import ServicesSection from "@/components/Services/services-section";
import VisionMissionSection from "@/components/Vision & Mission/vision-mission-section";

export default function Home() {
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
