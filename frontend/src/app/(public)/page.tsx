import { getTitle } from "@/utils/metadata.utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: getTitle("Articles"),
  description: "Everything about cats",
};

export default function HomePage() {
  return <div>Home</div>;
}
