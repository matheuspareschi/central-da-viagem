export interface GroceryItem {
  id: string;
  name: string;
}

/** Itens básicos do mercado, na ordem e com a escrita do Thiago. Os originais não podem ser apagados, só desmarcados. */
export const baseGroceryItems: GroceryItem[] = [
  "Papel higiênico",
  "Açúcar cristal",
  "Arroz",
  "Alho",
  "Cebola",
  "Sal",
  "Macarrão",
  "Detergente",
  "Sabão para máquina de louça",
  "Sabão de roupa",
  "Café",
  "Coador de café",
  "Água",
  "Manteiga",
  "Azeite",
  "Ovos",
  "Leite",
  "Pão de forma",
  "Waffle",
  "Maple (doce de caramelo)",
].map((name, index) => ({ id: `base-${index + 1}`, name }));

export const GROCERY_CHECKED_STORAGE_KEY = "lista:mercado";
export const GROCERY_CUSTOM_STORAGE_KEY = "lista:mercado:proprios";
