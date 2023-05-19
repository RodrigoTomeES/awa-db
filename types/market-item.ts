import { routes } from '@/utils';

const ARTIFACTS = 'Artifacts & Fragments';
const AVATAR = 'Avatar';
const BADGES = 'Badges & Borders';
const GAME_VAULT = 'Game Vault';
const DELL_REWARDS = 'Dell Rewards';
const UNKNOWN = 'Unknown';

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
  {
    name: UNKNOWN,
    slug: routes.unknown.slug,
  },
];

export type TypeMarketItemCategory =
  | 'Artifacts & Fragments'
  | 'Avatar'
  | 'Badges & Borders'
  | 'Game Vault'
  | 'Dell Rewards'
  | 'Unknown';

export type TypeMarketItem = {
  /**
   * Item ID
   */
  id: number;
  /**
   * Item image
   */
  image?: string;
  /**
   * Item name
   */
  name: string;
  /**
   * Item description
   */
  description?: string;
  /**
   * Item price
   */
  price?: number;
  /**
   * Item categories
   */
  categories: Array<TypeMarketItemCategory>;
};
