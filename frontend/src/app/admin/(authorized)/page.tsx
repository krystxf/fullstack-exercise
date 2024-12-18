"use client";

import toast from "react-hot-toast";

import { Link } from "@/components/Link";
import { useDeleteArticleMutation, useGetArticlesQuery } from "@/lib/api";

export default function AdminEditPage() {
    const { data, isLoading } = useGetArticlesQuery();
    const [deleteMutation] = useDeleteArticleMutation();

    async function handleDeleteArticle(
        articleId: string,
        articleTitle: string,
    ) {
        const res = await deleteMutation(articleId);

        if (res.error) {
            toast.error("Failed to delete article");
        } else {
            toast.success(`Deleted: ${articleTitle}`);
        }
    }

    return (
        <div className="mx-auto max-w-screen-lg px-8 py-4">
            {isLoading ? (
                <div>Loading</div>
            ) : (
                <div className="flex flex-col gap-4">
                    {data?.items.map((article) => (
                        <div key={article.articleId} className="">
                            <h2 className="font-semibold">{article.title}</h2>
                            <p className="max-w-screen-sm text-ellipsis text-sm text-neutral-700">
                                {article.perex}
                            </p>
                            <div className="flex gap-2">
                                <Link href={`/admin/edit/${article.articleId}`}>
                                    Edit
                                </Link>
                                <button
                                    onClick={() =>
                                        handleDeleteArticle(
                                            article.articleId,
                                            article.title,
                                        )
                                    }
                                    className="text-red-500"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
