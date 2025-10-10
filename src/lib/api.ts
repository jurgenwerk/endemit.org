export const getApiPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_API_PATH}${path}`;
