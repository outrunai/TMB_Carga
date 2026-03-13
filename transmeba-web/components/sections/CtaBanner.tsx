import { MessageCircle } from "lucide-react";
import { getWhatsappUrl } from "@/lib/whatsapp";

export default function CtaBanner() {
  const whatsappUrl = getWhatsappUrl();

  return (
    <section className="bg-accent">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-8 py-16 md:flex-row">
        {/* Bloque de texto */}
        <div>
          <h2 className="mb-3 font-heading text-3xl font-extrabold text-white md:text-4xl">
            Queremos brindarte el mejor servicio para hacer crecer tu negocio
          </h2>
          <p className="font-body text-white/80">
            Contáctanos ahora y recibe una cotización personalizada sin costo.
          </p>
        </div>

        {/* Botón WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg bg-white px-8 py-4 font-heading font-bold text-accent transition-colors hover:bg-slate-100"
        >
          <MessageCircle size={20} />
          Atención en Línea
        </a>
      </div>
    </section>
  );
}
