"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { AdminNavbar } from "@/components/Admin/Navbar";
import { loadFromLocalStorage } from "@/lib/slices/auth.slice";

type Props = {
    children: React.ReactNode;
};

export default function AdminLayout(props: Props) {
    const { children } = props;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadFromLocalStorage());
    }, [dispatch]);

    return (
        <>
            <AdminNavbar />

            <div className="flex min-h-screen w-full justify-center px-8 py-4">
                <main className="w-full max-w-screen-lg">{children}</main>
            </div>
        </>
    );
}
