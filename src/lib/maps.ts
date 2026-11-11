/** Link de busca do Google Maps montado só com texto que já está nos dados (nome e endereço). */
export function mapSearchUrl(name: string, address?: string): string {
  const query = [name, address].filter(Boolean).join(", ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
