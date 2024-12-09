"use server";
import { serverSideFetchApi } from "@/utils/api.utils";
import { ClientSideHomePage } from "./client-page";
import type { ArticlesResponse } from "@/lib/api.types";
import { Metadata } from "next";
import { getTitle } from "@/utils/metadata.utils";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: getTitle("Articles"),
    description: "Everything about cats",
  };
}

export default async function HomePage() {
  const res = await serverSideFetchApi(`/articles`);

  try {
    const data: ArticlesResponse = await res.json();

    return <ClientSideHomePage initialData={data} />;
  } catch {
    return <div>Something went wrong</div>;
  }
}
