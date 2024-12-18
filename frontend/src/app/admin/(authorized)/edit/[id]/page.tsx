"use server";

import { notFound } from "next/navigation";

import AdminEditClientPage from "./client-page";

import { PageWithParams } from "@/types/page.types";
import { serverSideFetchApi } from "@/utils/api.utils";

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
