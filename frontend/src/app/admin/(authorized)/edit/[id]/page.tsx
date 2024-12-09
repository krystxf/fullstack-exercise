"use server";

import { PageWithParams } from "@/types/page.types";
import AdminEditClientPage from "./client-page";
import { serverSideFetchApi } from "@/utils/api.utils";
import { notFound } from "next/navigation";

type Props = PageWithParams<{ id: string }>;

export default async function AdminEditPage({ params }: Props) {
  const { id } = await params;

  const res = await serverSideFetchApi(`/articles/${id}`);
  const article = await res.json();

  if (!res.ok) {
    return notFound();
  }

  return (
    <AdminEditClientPage
      articleId={id}
      title={article.title}
      perex={article.perex}
      content={article.content}
    />
  );
}
