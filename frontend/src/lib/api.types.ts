/**
 * In real world this would be either generated from schema
 * or shared between FE & BE
 */

export type LoginBody = { username: string; password: string };

export type LoginResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

export type ArticleDetail = {
  articleId: string;
  title: string;
  perex: string;
  content: string;
  imageId: string;
  createdAt: string;
  lastUpdatedAt: string;
  comments: {
    commentId: string;
    articleId: string;
    author: string;
    content: string;
    postedAt: string;
    score: number;
  }[];
};

export type ArticlesResponse = {
  items: ArticleDetail[];
};

export type CreateArticleBody = {
  title: string;
  perex: string;
  imageId?: string;
  content: string;
};

export type EditArticleBody = CreateArticleBody & {
  articleId: string;
};
