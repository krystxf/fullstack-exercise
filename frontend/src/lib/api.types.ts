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
