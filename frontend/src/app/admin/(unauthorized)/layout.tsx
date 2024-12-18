"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectIsAuthenticated } from "@/lib/store";

type Props = {
    children: React.ReactNode;
};

export default function AdminUnauthorizedLayout(props: Props) {
    const { children } = props;

    const router = useRouter();
    const isAuthenticated = useSelector(selectIsAuthenticated);

    useEffect(() => {
        if (isAuthenticated === true) {
            router.push("/admin");
        }
    }, [isAuthenticated, router]);

    return children;
}
