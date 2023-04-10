import { getRealURL } from './url';

export const routes = {
  index: getRealURL('/'),
  page: (page: number) => getRealURL(`/${page}`),
  artifacts: {
    index: getRealURL('/artifacts'),
    page: (page: number) => getRealURL(`/artifacts/${page}`),
  },
  avatar: {
    index: getRealURL('/avatars'),
    page: (page: number) => getRealURL(`/avatars/${page}`),
  },
  badges: {
    index: getRealURL('/badges-and-borders'),
    page: (page: number) => getRealURL(`/badges-and-borders/${page}`),
  },
  gameVault: {
    index: getRealURL('/game-vault'),
    page: (page: number) => getRealURL(`/game-vault/${page}`),
  },
  dellRewards: {
    index: getRealURL('/dell-rewards'),
    page: (page: number) => getRealURL(`/dell-rewards/${page}`),
  },
};
