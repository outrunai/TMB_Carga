import Image from "next/image";
import Link from "next/link";
import { Truck, Package, Shield, Container, type LucideIcon } from "lucide-react";
import { ServiceItem } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = { Truck, Package, Shield, Container };

interface ServicesSectionProps {
  services: ServiceItem[];
}

function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = iconMap[service.iconName];

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      {service.image.data ? (
        <Image
          src={service.image.data.attributes.url}
          alt={service.image.data.attributes.alternativeText || service.title}
          width={service.image.data.attributes.width}
          height={service.image.data.attributes.height}
          className="h-48 w-full object-cover"
        />
      ) : (
        <div className="h-48 w-full bg-primary/10" />
      )}

      {/* Content */}
      <div className="p-6">
        {Icon && (
          <Icon className="mb-3 text-accent" size={32} strokeWidth={1.5} />
        )}
        <h3 className="mb-2 font-heading text-xl font-bold text-primary">
          {service.title}
        </h3>
        <p className="mb-4 font-body text-sm leading-relaxed text-text-secondary">
          {service.description}
        </p>
        <Link
          href={service.href}
          className="font-heading text-sm font-bold text-accent hover:underline"
        >
          Saber más →
        </Link>
      </div>
    </div>
  );
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="servicios" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-2 font-heading text-sm font-bold uppercase tracking-widest text-accent">
          LO QUE HACEMOS
        </p>
        <h2 className="mb-4 font-heading text-3xl font-bold text-primary md:text-4xl">
          Nuestros Servicios
        </h2>
        <p className="mb-12 max-w-2xl font-body text-text-secondary">
          Soluciones logísticas integrales diseñadas para garantizar la
          seguridad, eficiencia y trazabilidad de tu carga en todo el territorio
          nacional.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
