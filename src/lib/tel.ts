export const tel = (phone: string) => `tel:${phone.replace(/[^\d]/g, "")}`;
