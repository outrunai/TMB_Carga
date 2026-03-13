import { AboutData } from "@/lib/types";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const mockAboutData: AboutData = {
  id: 1,
  heading: "Nuestra Empresa",
  missionTitle: "Más de dos décadas moviendo a Colombia",
  missionText:
    "Transmeba es una empresa de transporte terrestre de carga con sede en Medellín, Colombia. Con más de 20 años de experiencia, contamos con flota propia y cobertura nacional para mover la mercancía de nuestros clientes de forma segura, puntual y eficiente a cualquier rincón del país.",
  bascText:
    "Contamos con certificación BASC (Business Alliance for Secure Commerce), que garantiza altos estándares de seguridad en toda nuestra cadena logística, protegiendo tu carga contra actividades ilícitas y asegurando el cumplimiento de normativas internacionales.",
  ctaLabel: "Saber más",
  ctaHref: "#nuestra-empresa",
  image: {
    data: {
      id: 1,
      attributes: {
        url: "/images/transmeba.png",
        alternativeText: "Transmeba - Transporte de carga terrestre",
        width: 800,
        height: 600,
      },
    },
  },
};

export async function getAboutData(): Promise<AboutData> {
  try {
    const res = await fetch(`${STRAPI_URL}/about?populate=*`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Strapi response not ok");

    const json = await res.json();
    const attrs = json.data.attributes;
    const rawImage = attrs.image as AboutData["image"] | undefined;
    const image: AboutData["image"] = rawImage ?? { data: null };

    if (image.data?.attributes?.url) {
      const url = image.data.attributes.url;
      if (url.startsWith("/") && STRAPI_URL) {
        image.data.attributes.url = `${STRAPI_URL.replace(/\/$/, "")}${url}`;
      }
    }

    return {
      id: json.data.id,
      heading: attrs.heading as string,
      missionTitle: attrs.missionTitle as string,
      missionText: attrs.missionText as string,
      bascText: attrs.bascText as string,
      ctaLabel: (attrs.ctaLabel as string) || "Saber más",
      ctaHref: (attrs.ctaHref as string) || "#nuestra-empresa",
      image,
    };
  } catch {
    return mockAboutData;
  }
}
