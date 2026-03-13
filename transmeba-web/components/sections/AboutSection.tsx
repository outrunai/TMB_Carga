import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { AboutData } from "@/lib/types";

interface AboutSectionProps {
  aboutData: AboutData;
}

export default function AboutSection({ aboutData }: AboutSectionProps) {
  const imageSrc = aboutData.image.data?.attributes?.url ?? "/images/transmeba.png";
  const imageAlt =
    aboutData.image.data?.attributes?.alternativeText ?? "Transmeba transporte de carga";

  return (
    <section id="nuestra-empresa" className="bg-background py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center">
        {/* Columna izquierda — texto */}
        <div>
          <p className="mb-2 font-heading text-sm font-bold uppercase tracking-widest text-accent">
            NUESTRA EMPRESA
          </p>
          <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
            {aboutData.heading}
          </h2>
          <div className="my-6 h-1 w-16 bg-accent" />
          <h3 className="mb-4 font-heading text-xl font-semibold text-primary/80">
            {aboutData.missionTitle}
          </h3>
          <p className="mb-6 font-body text-gray-600">{aboutData.missionText}</p>
          <p className="mb-8 flex items-start gap-2 font-body text-gray-600">
            <ShieldCheck className="mt-1 shrink-0 text-accent" size={20} />
            <span>{aboutData.bascText}</span>
          </p>
          <a
            href={aboutData.ctaHref}
            className="inline-block rounded-lg bg-accent px-8 py-3 font-heading font-bold text-white transition-colors hover:bg-orange-600"
          >
            {aboutData.ctaLabel}
          </a>
        </div>

        {/* Columna derecha — imagen */}
        <div className="relative h-80 overflow-hidden rounded-2xl shadow-xl md:h-[28rem]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/10" />
        </div>
      </div>
    </section>
  );
}
