"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export default function AdminAuthorizedLayout(props: Props) {
  const { children } = props;

  useEffect(() => {
    const auth = window.localStorage.getItem("auth");

    if (!auth) {
      return redirect("/admin/login");
    }
  }, []);

  return children;
}
