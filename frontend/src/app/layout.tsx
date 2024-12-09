"use client";
import "@/styles/global.css";
import { store } from "@/lib/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

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
