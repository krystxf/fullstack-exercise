"use server";
import { serverSideFetchApi } from "@/utils/api.utils";
import { ClientSideHomePage } from "./client-page";
import type { ArticlesResponse } from "@/lib/api.types";

// export const metadata: Metadata = {
//   title: getTitle("Articles"),
//   description: "Everything about cats",
// };

export default async function HomePage() {
  const res = await serverSideFetchApi(`/articles`);

  const data: ArticlesResponse = await res.json();

  return <ClientSideHomePage initialData={data} />;
}
