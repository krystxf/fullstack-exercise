"use client";
import "@/styles/global.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

import { store } from "@/lib/store";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Toaster />
                <Provider store={store}>{children}</Provider>
            </body>
        </html>
    );
}
