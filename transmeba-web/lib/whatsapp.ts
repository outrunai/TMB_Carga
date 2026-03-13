const DEFAULT_WHATSAPP_NUMBER = "573147270665";

export function getWhatsappUrl(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const digits = raw?.replace(/\D/g, "") || DEFAULT_WHATSAPP_NUMBER;
  return `https://wa.me/${digits}`;
}
