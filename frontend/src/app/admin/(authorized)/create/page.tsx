import { getTitle } from "@/utils/metadata.utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: getTitle("Create Article"),
};

export default function AdminCreatePage() {
  return <div>Admin create</div>;
}
