"use client";
import { ArticleCard } from "@/components/ArticleCard";
import { useGetArticlesQuery } from "@/lib/api";
import type { ArticlesResponse } from "@/lib/api.types";

type Props = {
    initialData: ArticlesResponse;
};

export function ClientSideHomePage(props: Props) {
    const { data = props.initialData } = useGetArticlesQuery();

    // TODO: RTK query with hydratation
    // TODO: Infinite scroll

    return (
        <>
            <h1 className="mb-12 text-4xl font-medium">Recent articles</h1>

            <div className="flex flex-col gap-8">
                {data.items.map((article) => (
                    <ArticleCard key={article.articleId} {...article} />
                ))}
            </div>
        </>
    );
}
