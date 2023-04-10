import { routes } from '@/utils';

const ARTIFACTS = 'Artifacts & Fragments';
const AVATAR = 'Avatar';
const BADGES = 'Badges & Borders';
const GAME_VAULT = 'Game Vault';
const DELL_REWARDS = 'Dell Rewards';

export const MARKET_ITEMS_CATEGORIES: {
  name: TypeMarketItemCategory;
  slug: string;
}[] = [
  {
    name: ARTIFACTS,
    slug: routes.artifacts.slug,
  },
  {
    name: AVATAR,
    slug: routes.avatar.slug,
  },
  {
    name: BADGES,
    slug: routes.badges.slug,
  },
  {
    name: GAME_VAULT,
    slug: routes.gameVault.slug,
  },
  {
    name: DELL_REWARDS,
    slug: routes.dellRewards.slug,
  },
];

export type TypeMarketItemCategory =
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
