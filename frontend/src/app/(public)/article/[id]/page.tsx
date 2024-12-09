import { serverSideFetchApi, getImageUrl } from "@/utils/api.utils";
import { getTitle } from "@/utils/metadata.utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { PageWithParams } from "@/types/page.types";
import ReactMarkdown from "react-markdown";
import { ArticleDate } from "@/components/ArticleDate";
import { ArticleDetail } from "@/lib/api.types";

type Props = PageWithParams<{ id: string }>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const res = await serverSideFetchApi(`/articles/${id}`);

  if (!res.ok) {
    return {};
  }

  const article: ArticleDetail = await res.json();

  return {
    title: getTitle(article.title),
    description: article.perex,
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { id } = await params;

  const res = await serverSideFetchApi(`/articles/${id}`);

  if (!res.ok) {
    return notFound();
  }

  const article: ArticleDetail = await res.json();

  return (
    <>
      <h1 className="text-3xl font-medium">{article.title}</h1>
      <ArticleDate
        createdAt={article.createdAt}
        updatedAt={article.lastUpdatedAt}
      />

      {article.imageId}
      <div className="relative w-full max-h-full h-48">
        <Image
          src={getImageUrl(article.imageId)}
          alt={`Image for article: ${article.title}`}
          priority
          fill
          objectFit="scale-down"
        />
      </div>

      <ReactMarkdown>{article.content}</ReactMarkdown>
    </>
  );
}
