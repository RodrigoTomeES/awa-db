export const getRealURL = (url: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${url}`;
