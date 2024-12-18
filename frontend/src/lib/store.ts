import { configureStore } from "@reduxjs/toolkit";

import { api } from "@/lib/api";
import { authReducer } from "@/lib/slices/auth.slice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const selectIsAuthenticated = (state: RootState) =>
    state.auth.isAuthenticated;
