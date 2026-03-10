export interface NavItem {
  id: number;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface StrapiImage {
  data: {
    id: number;
    attributes: {
      url: string;
      alternativeText: string | null;
      width: number;
      height: number;
    };
  } | null;
}

export interface HeroData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  backgroundImage: StrapiImage;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
  href: string;
  image: StrapiImage;
}

export interface ClientLogo {
  id: number;
  name: string;
  logo: StrapiImage;
  websiteUrl?: string;
}

export interface WhyUsItem {
  id: number;
  stat: string;
  label: string;
  iconName: string;
}

export interface FooterData {
  id: number;
  phone: string;
  mobile: string;
  email: string;
  address: string;
  instagramUrl: string;
  facebookUrl: string;
  whatsappNumber: string;
  legalLinks: Array<{ label: string; href: string }>;
}
