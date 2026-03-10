import { getHeroData } from "@/lib/api/hero";
import { getClients } from "@/lib/api/clients";
import HeroSection from "@/components/sections/HeroSection";
import ClientsCarousel from "@/components/sections/ClientsCarousel";

export default async function Home() {
  const heroData = await getHeroData();
  const clients = await getClients();

  return (
    <>
      <HeroSection heroData={heroData} />
      <ClientsCarousel clients={clients} />
      {/* <ServicesSection /> */}
      {/* <WhyUsSection /> */}
      {/* <AboutSection /> */}
      {/* <FleetSection /> */}
      {/* <CtaBanner /> */}
    </>
  );
}
