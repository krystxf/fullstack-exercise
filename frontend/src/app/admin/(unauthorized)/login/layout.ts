import { getTitle } from "@/utils/metadata.utils";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: getTitle("Login"),
};

type Props = {
    children: ReactNode;
};

export default function AdminLoginPageLayout(props: Props) {
    const { children } = props;

    return children;
}
