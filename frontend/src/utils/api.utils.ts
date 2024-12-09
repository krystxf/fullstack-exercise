export function serverSideFetchApi(
  path: string,
  init?: RequestInit
): Promise<Response> {
  const url = new URL(path, process.env.NEXT_PUBLIC_API_URL);

  return fetch(url, {
    ...init,
    headers: {
      ...init?.headers,
      "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY!,
    },
  });
}

export const getImageUrl = (imageId: string) => {
  return `/api/images/${imageId}`;
};
