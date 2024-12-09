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

      {children}
    </>
  );
}
