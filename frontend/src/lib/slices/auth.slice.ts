import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { LocalStorageKeys } from "@/enums/local-storage-keys.enum";

type AuthState = {
    accessToken?: string;
    isAuthenticated: boolean | null;
    expiresAt?: number;
};

const initialState: AuthState = {
    accessToken: undefined,
    isAuthenticated: null,
    expiresAt: undefined,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (
            state,
            action: PayloadAction<{ accessToken: string; expiresIn: number }>,
        ) => {
            const { accessToken, expiresIn } = action.payload;
            const expiresAt = Date.now() + expiresIn * 1_000;

            state.accessToken = accessToken;
            state.isAuthenticated = true;
            state.expiresAt = expiresAt;

            window.localStorage.setItem(
                LocalStorageKeys.auth,
                JSON.stringify({
                    access_token: accessToken,
                    expires_at: expiresAt,
                }),
            );
        },
        logout: (state) => {
            state.accessToken = undefined;
            state.isAuthenticated = false;
            state.expiresAt = undefined;

            window.localStorage.removeItem(LocalStorageKeys.auth);
        },
        loadFromLocalStorage: (state) => {
            const storedAuth = window.localStorage.getItem(
                LocalStorageKeys.auth,
            );

            if (storedAuth) {
                const { access_token, expires_at } = JSON.parse(storedAuth);

                if (new Date().getTime() < expires_at) {
                    state.accessToken = access_token;
                    state.isAuthenticated = true;
                    state.expiresAt = expires_at;
                } else {
                    state.isAuthenticated = false;
                    window.localStorage.removeItem(LocalStorageKeys.auth); // Token expired
                }
            } else {
                state.isAuthenticated = false;
            }
        },
    },
});

export const { login, logout, loadFromLocalStorage } = authSlice.actions;

export const authReducer = authSlice.reducer;
