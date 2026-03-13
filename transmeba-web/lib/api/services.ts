import { ServiceItem } from "@/lib/types";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const mockServicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Transporte de Carga Masiva y Semi-Masiva",
    description:
      "Servicio de transporte terrestre masivo y semi-masivo con flota propia de más de 50 vehículos para el manejo seguro y eficiente de grandes volúmenes de carga a nivel nacional.",
    iconName: "Truck",
    href: "#servicios",
    image: {
      data: {
        id: 1,
        attributes: {
          url: "/images/Semi-masiva-y-masiva-400x300.jpeg",
          alternativeText: "Transporte de Carga Masiva y Semi-Masiva",
          width: 800,
          height: 600,
        },
      },
    },
  },
  {
    id: 2,
    title: "Desconsolidación de Contenedores ITR",
    description:
      "Servicio especializado de desconsolidación en el depósito habilitado, optimizando tiempos y costos en la cadena logística de importación.",
    iconName: "Package",
    href: "#servicios",
    image: {
      data: {
        id: 2,
        attributes: {
          url: "/images/transmebacarga2.jpg",
          alternativeText: "Desconsolidación de Contenedores ITR",
          width: 800,
          height: 600,
        },
      },
    },
  },
  {
    id: 3,
    title: "Control Vehicular 24 Horas",
    description:
      "Monitoreo permanente de la flota con tecnología GPS y central de control para garantizar la seguridad y trazabilidad de cada operación.",
    iconName: "Shield",
    href: "#servicios",
    image: {
      data: {
        id: 3,
        attributes: {
          url: "/images/transmeba.png",
          alternativeText: "Control Vehicular 24 Horas",
          width: 800,
          height: 600,
        },
      },
    },
  },
];

export async function getServices(): Promise<ServiceItem[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/services?populate=*`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Strapi response not ok");

    const json = await res.json();

    return json.data.map(
      (item: { id: number; attributes: Record<string, unknown> }) => {
        const attrs = item.attributes;
        const rawImage = attrs.image as ServiceItem["image"] | undefined;
        const image: ServiceItem["image"] = rawImage ?? { data: null };

        if (image.data?.attributes?.url) {
          const url = image.data.attributes.url;
          if (url.startsWith("/") && STRAPI_URL) {
            image.data.attributes.url = `${STRAPI_URL.replace(/\/$/, "")}${url}`;
          }
        }

        return {
          id: item.id,
          title: attrs.title as string,
          description: attrs.description as string,
          iconName: attrs.iconName as string,
          href: (attrs.href as string) || "#servicios",
          image,
        };
      }
    );
  } catch {
    return mockServicesData;
  }
}
