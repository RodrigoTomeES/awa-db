import marketplace from '@/db/marketplace.json';

import type { TypeMarketItem, TypeMarketItemCategoryWithSlug } from '@/types';

const removeUknownItems = (item: TypeMarketItem) =>
  !item.categories.includes('Unknown');

export const marketplaceWithoutUnknownItems = (
  marketplace as TypeMarketItem[]
).filter(removeUknownItems);

export const marketplaceByCategory = (
  category: TypeMarketItemCategoryWithSlug
) =>
  (marketplace as TypeMarketItem[]).filter((item) =>
    item.categories.includes(category.name)
  );
