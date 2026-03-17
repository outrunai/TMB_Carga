import { notFound } from "next/navigation";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { getServices, getServiceBySlug } from "@/lib/api/services";
import { getWhatsappUrl } from "@/lib/whatsapp";
import CtaBanner from "@/components/sections/CtaBanner";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = await getServices();
  return services
    .filter((s) => s.slug)
    .map((s) => ({ slug: s.slug! }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Transmeba Carga`,
    description: service.fullDescription ?? service.description,
  };
}

export default async function ServicioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  const whatsappUrl = getWhatsappUrl();
  const heroImage = service.image.data?.attributes?.url ?? "/images/transmebacarga1.jpg";

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96">
        <Image
          src={heroImage}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4">
          <h1 className="font-heading text-3xl font-extrabold text-white md:text-5xl">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-start">
          {/* Left — text */}
          <div>
            <p className="mb-2 font-heading text-sm font-bold uppercase tracking-widest text-accent">
              NUESTROS SERVICIOS
            </p>
            <h2 className="mb-6 font-heading text-2xl font-bold text-primary md:text-3xl">
              {service.title}
            </h2>
            <p className="mb-6 font-body leading-relaxed text-text-secondary">
              {service.fullDescription ?? service.description}
            </p>
            <p className="mb-8 font-body leading-relaxed text-text-secondary">
              {service.description}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 font-heading font-bold text-white transition-colors hover:bg-orange-600"
            >
              <MessageCircle size={20} />
              Contáctenos
            </a>
          </div>

          {/* Right — images */}
          <div className="space-y-6">
            {(service.detailImages ?? []).map((src) => (
              <div key={src} className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={src}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
            {(!service.detailImages || service.detailImages.length === 0) &&
              service.image.data && (
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={service.image.data.attributes.url}
                    alt={service.title}
                    width={service.image.data.attributes.width}
                    height={service.image.data.attributes.height}
                    className="h-auto w-full object-cover"
                  />
                </div>
              )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </>
  );
}
