export const getRealURL = (url: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${url}`;

export const removeLastDirectoryURL = (url: string) =>
  url.replace(/\/$/, '').substring(0, url.replace(/\/$/, '').lastIndexOf('/'));
