type TypeMarketItemCategory =
  | 'Artifacts & Fragments'
  | 'Avatar'
  | 'Badges & Borders'
  | 'Game Vault'
  | 'Dell Rewards';

export type TypeMarketItem = {
  /**
   * ID del item
   */
  id: number;
  /**
   * Imagen del item
   */
  image?: string;
  /**
   * Nombre del item
   */
  name: string;
  /**
   * Descripción del item
   */
  description?: string;
  /**
   * Precio del item
   */
  price?: number;
  /**
   * Categoría del item
   */
  categories: Array<TypeMarketItemCategory>;
};
