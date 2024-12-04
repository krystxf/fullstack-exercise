import { getTitle } from "@/utils/metadata.utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: getTitle("Login"),
};

export default function AdminLoginPage() {
  return <div>Admin login</div>;
}
