import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type {
    ArticleDetail,
    ArticlesResponse,
    CreateArticleBody,
    EditArticleBody,
    LoginBody,
    LoginResponse,
} from "@/lib/api.types";
import { RootState } from "@/lib/store"; // FIXME: circular dependency

export const api = createApi({
    reducerPath: "appliftingApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL!,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.accessToken;

            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            headers.set("X-API-KEY", process.env.NEXT_PUBLIC_API_KEY!);

            return headers;
        },
    }),

    tagTypes: ["articles"],

    endpoints: (builder) => ({
        getArticles: builder.query<ArticlesResponse, void>({
            query: () => "articles",
            providesTags: ["articles"],
        }),
        getArticleDetail: builder.query<ArticleDetail, string>({
            query: (id) => `articles/${id}`,
            providesTags: ["articles"],
        }),
        login: builder.mutation<LoginResponse, LoginBody>({
            query: (body) => ({
                url: "login",
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        }),
        editArticle: builder.mutation<void, EditArticleBody>({
            invalidatesTags: ["articles"],
            query: ({ articleId, ...body }) => ({
                method: "PATCH",
                url: `/articles/${articleId}`,
                body: JSON.stringify({
                    articleId,
                    ...body,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        }),
        deleteArticle: builder.mutation<void, string>({
            invalidatesTags: ["articles"],
            query: (id) => ({
                method: "DELETE",
                url: `/articles/${id}`,
            }),
        }),
        createArticle: builder.mutation<ArticleDetail, CreateArticleBody>({
            invalidatesTags: ["articles"],
            query: (body) => ({
                method: "POST",
                url: "/articles",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        }),
    }),
});

export const {
    useGetArticlesQuery,
    useGetArticleDetailQuery,
    useLoginMutation,
    useCreateArticleMutation,
    useEditArticleMutation,
    useDeleteArticleMutation,
} = api;
