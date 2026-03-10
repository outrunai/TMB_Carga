import { getHeroData } from "@/lib/api/hero";
import HeroSection from "@/components/sections/HeroSection";

export default async function Home() {
  const heroData = await getHeroData();

  return (
    <>
      <HeroSection heroData={heroData} />
      {/* <ClientsCarousel /> */}
      {/* <ServicesSection /> */}
      {/* <WhyUsSection /> */}
      {/* <AboutSection /> */}
      {/* <FleetSection /> */}
      {/* <CtaBanner /> */}
    </>
  );
}
