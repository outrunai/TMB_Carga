"use client";

import Image from "next/image";
import { ClientLogo } from "@/lib/types";

interface ClientsCarouselProps {
  clients: ClientLogo[];
}

export default function ClientsCarousel({ clients }: ClientsCarouselProps) {
  const items = [...clients, ...clients];

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-2 font-heading text-sm font-bold uppercase tracking-widest text-accent">
          NUESTROS CLIENTES
        </p>
        <h2 className="mb-10 font-heading text-2xl font-bold text-primary md:text-3xl">
          Empresas que confían en nosotros
        </h2>

        <div className="group overflow-hidden">
          <div className="flex gap-12 animate-[scroll_15s_linear_infinite] md:animate-[scroll_30s_linear_infinite] group-hover:pause">
            {items.map((client, i) => (
              <div
                key={`${client.id}-${i}`}
                className="flex h-16 w-32 flex-shrink-0 items-center justify-center"
              >
                {client.logo?.data ? (
                  <Image
                    src={client.logo.data.attributes.url}
                    alt={client.logo.data.attributes.alternativeText || client.name}
                    width={128}
                    height={64}
                    style={{ objectFit: "contain" }}
                    className="opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                ) : (
                  <span className="text-sm text-text-secondary">{client.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
