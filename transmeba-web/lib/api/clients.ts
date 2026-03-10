import { ClientLogo } from "@/lib/types";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const mockClientsData: ClientLogo[] = [
  {
    id: 1,
    name: "Alion",
    logo: {
      data: {
        id: 1,
        attributes: {
          url: "/images/alion-300x176.png",
          alternativeText: "Logo Alion",
          width: 300,
          height: 176,
        },
      },
    },
  },
  {
    id: 2,
    name: "CPA de Colombia",
    logo: {
      data: {
        id: 2,
        attributes: {
          url: "/images/CPA-de-colombia-300x145.jpg",
          alternativeText: "Logo CPA de Colombia",
          width: 300,
          height: 145,
        },
      },
    },
  },
  {
    id: 3,
    name: "Coimpresores",
    logo: {
      data: {
        id: 3,
        attributes: {
          url: "/images/Coimpresores-300x145.jpg",
          alternativeText: "Logo Coimpresores",
          width: 300,
          height: 145,
        },
      },
    },
  },
  {
    id: 4,
    name: "Fabricato",
    logo: {
      data: {
        id: 4,
        attributes: {
          url: "/images/Fabricato-300x145.jpg",
          alternativeText: "Logo Fabricato",
          width: 300,
          height: 145,
        },
      },
    },
  },
  {
    id: 5,
    name: "Familia",
    logo: {
      data: {
        id: 5,
        attributes: {
          url: "/images/familia.png",
          alternativeText: "Logo Familia",
          width: 300,
          height: 145,
        },
      },
    },
  },
  {
    id: 6,
    name: "Solla",
    logo: {
      data: {
        id: 6,
        attributes: {
          url: "/images/solla-300x106.png",
          alternativeText: "Logo Solla",
          width: 300,
          height: 106,
        },
      },
    },
  },
  {
    id: 7,
    name: "Ravago",
    logo: {
      data: {
        id: 7,
        attributes: {
          url: "/images/Ravago-300x145.jpg",
          alternativeText: "Logo Ravago",
          width: 300,
          height: 145,
        },
      },
    },
  },
  {
    id: 8,
    name: "Argos",
    logo: {
      data: {
        id: 8,
        attributes: {
          url: "/images/logo-argos-300x132.png",
          alternativeText: "Logo Argos",
          width: 300,
          height: 132,
        },
      },
    },
  },
  {
    id: 9,
    name: "Corona",
    logo: {
      data: {
        id: 9,
        attributes: {
          url: "/images/Loco-Corona-300x145.jpg",
          alternativeText: "Logo Corona",
          width: 300,
          height: 145,
        },
      },
    },
  },
  {
    id: 10,
    name: "PepsiCo",
    logo: {
      data: {
        id: 10,
        attributes: {
          url: "/images/Logo-Peepsico-300x145.jpg",
          alternativeText: "Logo PepsiCo",
          width: 300,
          height: 145,
        },
      },
    },
  },
  {
    id: 11,
    name: "Entec",
    logo: {
      data: {
        id: 11,
        attributes: {
          url: "/images/Entec-300x145.jpg",
          alternativeText: "Logo Entec",
          width: 300,
          height: 145,
        },
      },
    },
  },
  {
    id: 12,
    name: "Edinsa",
    logo: {
      data: {
        id: 12,
        attributes: {
          url: "/images/Edinsa-300x145.jpg",
          alternativeText: "Logo Edinsa",
          width: 300,
          height: 145,
        },
      },
    },
  },
];

export async function getClients(): Promise<ClientLogo[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/clients?populate=*`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Strapi response not ok");

    const json = await res.json();

    return json.data.map((item: { id: number; attributes: Record<string, unknown> }) => {
      const attrs = item.attributes;
      const rawLogo = attrs.logo as ClientLogo["logo"] | undefined;
      const logo: ClientLogo["logo"] = rawLogo ?? { data: null };

      if (logo.data?.attributes?.url) {
        const url = logo.data.attributes.url;
        if (url.startsWith("/") && STRAPI_URL) {
          logo.data.attributes.url = `${STRAPI_URL.replace(/\/$/, "")}${url}`;
        }
      }

      return {
        id: item.id,
        name: attrs.name as string,
        logo,
        websiteUrl: (attrs.websiteUrl as string) || undefined,
      };
    });
  } catch {
    return mockClientsData;
  }
}
