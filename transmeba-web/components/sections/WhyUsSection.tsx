import {
  Truck,
  MapPin,
  Clock,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import { WhyUsItem } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  Truck,
  MapPin,
  Clock,
  CheckCircle,
};

const items: WhyUsItem[] = [
  { id: 1, stat: "+50", label: "Vehículos Propios", iconName: "Truck" },
  { id: 2, stat: "Nacional", label: "Cobertura Total", iconName: "MapPin" },
  { id: 3, stat: "24/7", label: "Control Vehicular", iconName: "Clock" },
  {
    id: 4,
    stat: "BASC",
    label: "Certificación de Seguridad",
    iconName: "CheckCircle",
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-2 font-heading text-sm font-bold uppercase tracking-widest text-accent">
          POR QUÉ ELEGIRNOS
        </p>
        <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">
          La diferencia Transmeba
        </h2>
        <p className="mb-16 max-w-2xl font-body text-white/70">
          Más de dos décadas de experiencia nos respaldan. Combinamos flota
          propia, tecnología de monitoreo y certificaciones internacionales para
          ofrecer un servicio de transporte confiable y seguro.
        </p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {items.map((item) => {
            const Icon = iconMap[item.iconName];
            return (
              <div
                key={item.id}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  {Icon && (
                    <Icon
                      className="text-accent"
                      size={32}
                      strokeWidth={1.5}
                    />
                  )}
                </div>
                <p className="mb-1 font-heading text-4xl font-extrabold text-white">
                  {item.stat}
                </p>
                <p className="font-body text-sm text-white/70">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
