import { getTitle } from "@/utils/metadata.utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: getTitle("Articles"),
};

export default function AdminRootPage() {
  return <div>Admin root</div>;
}
