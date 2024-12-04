import type { Metadata } from "next";
import "@/styles/global.css";
import { getTitle } from "@/utils/metadata.utils";

export const metadata: Metadata = {
  title: getTitle(),
  description: "Everything about cats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
