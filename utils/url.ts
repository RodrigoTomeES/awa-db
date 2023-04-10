export const getRealURL = (url: string | number) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${url}`;
