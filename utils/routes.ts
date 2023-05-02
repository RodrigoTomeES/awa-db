import { getRealURL } from './url';

export const routes = {
  index: getRealURL('/'),
  page: (page: number) => getRealURL(`/${page}`),
  artifacts: {
    index: getRealURL('/artifacts'),
    slug: 'artifacts',
    page: (page: number) => getRealURL(`/artifacts/${page}`),
  },
  avatar: {
    index: getRealURL('/avatars'),
    slug: 'avatars',
    page: (page: number) => getRealURL(`/avatars/${page}`),
  },
  badges: {
    index: getRealURL('/badges-and-borders'),
    slug: 'badges-and-borders',
    page: (page: number) => getRealURL(`/badges-and-borders/${page}`),
  },
  gameVault: {
    index: getRealURL('/game-vault'),
    slug: 'game-vault',
    page: (page: number) => getRealURL(`/game-vault/${page}`),
  },
  dellRewards: {
    index: getRealURL('/dell-rewards'),
    slug: 'dell-rewards',
    page: (page: number) => getRealURL(`/dell-rewards/${page}`),
  },
  unknown: {
    index: getRealURL('/unknown'),
    slug: 'unknown',
    page: (page: number) => getRealURL(`/unknown/${page}`),
  },
};
