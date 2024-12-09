"use client";
import { getTitle } from "@/utils/metadata.utils";
import Head from "next/head";
import { FormEvent, useState } from "react";

import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/lib/api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "@/lib/slices/auth.slice";

export default function AdminLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const [loginMutation, { isLoading }] = useLoginMutation();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await loginMutation({
      username,
      password,
    });

    if (res.error) {
      toast.error("Invalid username or password");
      return;
    }

    dispatch(
      login({
        accessToken: res.data.access_token,
        expiresIn: res.data.expires_in,
      })
    );

    toast.success("Logged in");

    router.push("/admin");
  }

  return (
    <>
      <Head>
        <title>{getTitle("Login")}</title>
      </Head>

      <form
        className="m-auto mt-24 flex flex-col gap-2 max-w-96"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col gap-1">
          Username
          <input
            type="text"
            name="username"
            className="border border-neutral-200 rounded-md px-2 py-1 shadow-sm"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label className="flex flex-col gap-1">
          Password
          <input
            type="password"
            name="password"
            className="border border-neutral-200 rounded-md px-2 py-1 shadow-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button
          disabled={isLoading}
          className="mt-2 bg-indigo-500 hover:bg-indigo-600 active:scale-[0.99] transition-all ease-in-out text-white rounded-md px-4 py-2"
        >
          Login
        </button>
      </form>
    </>
  );
}
