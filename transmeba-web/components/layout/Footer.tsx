import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Smartphone,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import type { FooterData } from "@/lib/types";

const footerData: FooterData = {
  id: 1,
  phone: "(4) 605 2165",
  mobile: "+57 314 727 0665",
  email: "info@transmebacarga.com",
  address: "Medellín, Colombia",
  instagramUrl: "https://www.instagram.com/tmb_carga",
  facebookUrl: "https://www.facebook.com/transmebacarga",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "573147270665",
  legalLinks: [
    { label: "Política de Privacidad", href: "#" },
    { label: "Política BASC", href: "#" },
    { label: "Política de Calidad", href: "#" },
  ],
};

const services = [
  "Transporte de Carga Masiva",
  "Desconsolidación de Contenedores ITR",
  "Control Vehicular 24h",
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1 — Contact */}
        <div>
          <div className="mb-6">
            <Image
              src="/images/logo.png"
              alt="Transmeba Carga"
              width={160}
              height={48}
              className="brightness-0 invert"
            />
          </div>

          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3 text-sm text-white/70">
              <Phone size={16} className="text-accent shrink-0" />
              {footerData.phone}
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <Smartphone size={16} className="text-accent shrink-0" />
              {footerData.mobile}
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <Mail size={16} className="text-accent shrink-0" />
              {footerData.email}
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <a
              href={footerData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href={footerData.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href={`https://wa.me/${footerData.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent transition-colors"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Column 2 — Services */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-4 text-accent">
            Servicios
          </h3>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service}>
                <Link
                  href="/#servicios"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Legal */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-4 text-accent">
            Información Importante
          </h3>
          <ul className="space-y-3">
            {footerData.legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10 py-6 text-center text-white/50 text-xs">
        &copy; {new Date().getFullYear()} Transmeba Carga. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
