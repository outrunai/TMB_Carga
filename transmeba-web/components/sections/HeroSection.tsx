import Image from "next/image";
import { HeroData } from "@/lib/types";

interface HeroSectionProps {
  heroData: HeroData;
}

export default function HeroSection({ heroData }: HeroSectionProps) {
  const bgImage = heroData.backgroundImage.data;

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      {bgImage ? (
        <Image
          src={bgImage.attributes.url}
          alt={bgImage.attributes.alternativeText || "Hero background"}
          fill
          priority
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-primary" />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
        {/* Subtitle */}
        <p className="mb-4 font-heading text-sm uppercase tracking-widest text-accent md:text-base">
          {heroData.subtitle}
        </p>

        {/* Title */}
        <h1 className="mb-6 font-heading text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
          {heroData.title}
        </h1>

        {/* Description */}
        <p className="mb-10 max-w-2xl font-body text-lg text-white/80 md:text-xl">
          {heroData.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={heroData.primaryCtaHref}
            className="rounded-lg border-2 border-white px-8 py-3 font-heading font-bold text-white transition-colors hover:bg-white hover:text-primary"
          >
            {heroData.primaryCtaLabel}
          </a>
          <a
            href={heroData.secondaryCtaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent px-8 py-3 font-heading font-bold text-white transition-colors hover:bg-orange-600"
          >
            {heroData.secondaryCtaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
