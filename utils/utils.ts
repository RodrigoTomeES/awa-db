export const NUM_ITEMS_BY_PAGE = 12;

// eslint-disable-next-line arrow-body-style
export const getUrlExtension = (url: string): string => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return url?.split(/[#?]/)[0].split('.').pop()!.trim();
};

export const isJPG = (extension: string): boolean =>
  extension?.toLowerCase() === 'jpg' || extension?.toLowerCase() === 'jpeg';
