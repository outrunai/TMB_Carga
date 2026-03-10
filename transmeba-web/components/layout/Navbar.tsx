"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { NavItem } from "@/lib/types";

const navItems: NavItem[] = [
  { id: 1, label: "Inicio", href: "/" },
  { id: 2, label: "Nuestra Empresa", href: "/#empresa" },
  { id: 3, label: "Servicios", href: "/#servicios" },
  { id: 4, label: "Puntos de Atención", href: "/#puntos" },
  { id: 5, label: "Gestión del Riesgo", href: "/#riesgo" },
  { id: 6, label: "Contáctenos", href: "/#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/">
          <div className="bg-white rounded px-2 py-1">
            <Image
              src="/images/logo.png"
              alt="Transmeba Carga"
              width={160}
              height={48}
              priority
            />
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="text-white/80 hover:text-accent font-body text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/#contacto"
          className="hidden lg:inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white font-heading font-bold text-sm px-5 py-2.5 rounded-lg transition-colors"
        >
          Cotizar ahora
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10 px-4 pb-4">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 border-b border-white/10 text-white/80 hover:text-accent font-body text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contacto"
            onClick={() => setIsOpen(false)}
            className="mt-4 block w-full text-center bg-accent hover:bg-orange-600 text-white font-heading font-bold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Cotizar ahora
          </Link>
        </div>
      )}
    </header>
  );
}
