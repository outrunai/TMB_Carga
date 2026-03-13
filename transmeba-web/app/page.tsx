import { getHeroData } from "@/lib/api/hero";
import { getClients } from "@/lib/api/clients";
import { getServices } from "@/lib/api/services";
import { getAboutData } from "@/lib/api/about";
import HeroSection from "@/components/sections/HeroSection";
import ClientsCarousel from "@/components/sections/ClientsCarousel";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import FleetSection from "@/components/sections/FleetSection";
import CtaBanner from "@/components/sections/CtaBanner";

export default async function Home() {
  const heroData = await getHeroData();
  const clients = await getClients();
  const services = await getServices();
  const aboutData = await getAboutData();

  return (
    <>
      <HeroSection heroData={heroData} />
      <ClientsCarousel clients={clients} />
      <AboutSection aboutData={aboutData} />
      <ServicesSection services={services} />
      <WhyUsSection />
      <FleetSection />
      <CtaBanner />
    </>
  );
}
