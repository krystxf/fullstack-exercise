"use client";
import { AdminNavbar } from "@/components/Admin/Navbar";
import { loadFromLocalStorage } from "@/lib/slices/auth.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

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

      <div className="w-full flex justify-center py-4 px-8 min-h-screen">
        <main className="w-full max-w-screen-lg">{children}</main>
      </div>
    </>
  );
}
