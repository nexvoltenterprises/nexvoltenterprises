const WHATSAPP_NUMBER = '919180595957';

export function getWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function getProductEnquiryUrl(productName: string): string {
  const message = `Hello Nexvolt Enterprises, I am interested in the ${productName}. Please share the price and availability.`;
  return getWhatsAppUrl(message);
}

export function getGeneralEnquiryUrl(): string {
  const message = 'Hello Nexvolt Enterprises, I would like to enquire about your electronics products. Please share the available categories and pricing.';
  return getWhatsAppUrl(message);
}
