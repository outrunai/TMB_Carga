import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { getWhatsappUrl } from "@/lib/whatsapp";

const fleetImages = [
  {
    src: "/images/image_2021_06_11T23_19_09_859Z-235x300.jpg",
    alt: "Flota Transmeba - Vehículos de carga",
  },
  {
    src: "/images/image_2021_06_11T23_19_31_668Z-249x300.jpg",
    alt: "Flota Transmeba - Transporte terrestre",
  },
];

export default function FleetSection() {
  const whatsappUrl = getWhatsappUrl();

  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-2 font-heading text-sm font-bold uppercase tracking-widest text-accent">
          NUESTRA FLOTA
        </p>
        <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">
          Flota Propia y Moderna
        </h2>
        <p className="mb-12 max-w-2xl font-body text-white/70">
          Más de 50 vehículos propios para garantizar disponibilidad y
          puntualidad
        </p>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {fleetImages.map((img) => (
            <div
              key={img.src}
              className="relative h-72 overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 font-heading font-bold text-white transition-colors hover:bg-orange-600"
          >
            <MessageCircle size={20} />
            Solicita tu servicio
          </a>
        </div>
      </div>
    </section>
  );
}
