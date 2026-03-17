import { HeroData } from "@/lib/types";
import { getWhatsappUrl } from "@/lib/whatsapp";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const mockHeroData: HeroData = {
  id: 1,
  title: "Soluciones Logísticas Seguras y Eficientes",
  subtitle: "Transporte de carga terrestre con cobertura nacional",
  description:
    "Más de 50 vehículos propios, control 24 horas y certificación BASC para garantizar la seguridad de tu mercancía.",
  primaryCtaLabel: "Nuestros Servicios",
  primaryCtaHref: "#servicios",
  secondaryCtaLabel: "Cotizar Ahora",
  secondaryCtaHref: "__WHATSAPP__",
  backgroundImage: {
    data: {
      id: 1,
      attributes: {
        url: "/images/Carga-masiva-y-semi-masiva.jpeg",
        alternativeText: "Flota de camiones Transmeba Carga",
        width: 1920,
        height: 1080,
      },
    },
  },
};

export async function getHeroData(): Promise<HeroData> {
  try {
    const res = await fetch(`${STRAPI_URL}/hero?populate=*`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Strapi response not ok");

    const json = await res.json();
    const attrs = json.data.attributes;

    const backgroundImage = attrs.backgroundImage;
    if (backgroundImage?.data?.attributes?.url) {
      const url = backgroundImage.data.attributes.url;
      if (url.startsWith("/") && STRAPI_URL) {
        backgroundImage.data.attributes.url = `${STRAPI_URL.replace(/\/$/, "")}${url}`;
      }
    }

    return {
      id: json.data.id,
      title: attrs.title,
      subtitle: attrs.subtitle,
      description: attrs.description,
      primaryCtaLabel: attrs.primaryCtaLabel,
      primaryCtaHref: attrs.primaryCtaHref,
      secondaryCtaLabel: attrs.secondaryCtaLabel,
      secondaryCtaHref: attrs.secondaryCtaHref,
      backgroundImage,
    };
  } catch {
    const whatsappUrl = getWhatsappUrl();
    return { ...mockHeroData, secondaryCtaHref: whatsappUrl };
  }
}
