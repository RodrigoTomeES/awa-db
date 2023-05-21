import { getRealURL } from './url';

export const routes = {
  index: getRealURL('/'),
  page: (page: number) => getRealURL(`/${page}/`),
  artifacts: {
    slug: 'artifacts',
    page: (page: number) => getRealURL(`/artifacts/${page}/`),
  },
  avatar: {
    slug: 'avatars',
    page: (page: number) => getRealURL(`/avatars/${page}/`),
  },
  badges: {
    slug: 'badges-and-borders',
    page: (page: number) => getRealURL(`/badges-and-borders/${page}/`),
  },
  gameVault: {
    slug: 'game-vault',
    page: (page: number) => getRealURL(`/game-vault/${page}/`),
  },
  dellRewards: {
    slug: 'dell-rewards',
    page: (page: number) => getRealURL(`/dell-rewards/${page}/`),
  },
  unknown: {
    slug: 'unknown',
    page: (page: number) => getRealURL(`/unknown/${page}/`),
  },
};
