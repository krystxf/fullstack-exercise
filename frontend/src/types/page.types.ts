export type PageWithParams<TParams extends object> = {
    params: Promise<TParams>;
};
