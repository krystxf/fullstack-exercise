import type { NextApiRequest } from "next";

/**
 * There's no simple way to add headers to URL in Next Image component
 * This endpoint is a workaround to add headers to the image request, so we can use Next Image optimization
 */
export default async function handler(req: NextApiRequest) {
  const requestUrl = new URL(String(req.url));
  const imageId = requestUrl.searchParams.get("id");

  return await fetch(
    `https://fullstack.exercise.applifting.cz/images/${imageId}`,
    {
      headers: {
        "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY!,
      },
    }
  );
}

export const config = {
  runtime: "edge",
};
