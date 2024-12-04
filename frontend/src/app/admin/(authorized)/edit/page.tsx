import { getTitle } from "@/utils/metadata.utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: getTitle("Edit Article"),
};

export default function AdminEditPage() {
  return <div>Admin edit</div>;
}
