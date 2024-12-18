import { ArticlesResponse } from "@/lib/api.types";
import { serverSideFetchApi } from "@/utils/api.utils";
import type { MetadataRoute } from "next";

// NOTE: sitemap for better SEO

// TODO: sitemap splitting (pagination)

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const records: MetadataRoute.Sitemap = [
        {
            url: "/",
            priority: 1,
        },
    ];

    try {
        const res = await serverSideFetchApi(`/articles`);
        const data: ArticlesResponse = await res.json();

        data.items.forEach((article) => {
            records.push({
                url: `/article/${article.articleId}`,
                priority: 0.8,
            });
        });
    } catch {}

    return records;
}
