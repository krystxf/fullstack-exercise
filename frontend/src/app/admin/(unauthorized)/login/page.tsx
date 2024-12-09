"use client";
import { getTitle } from "@/utils/metadata.utils";
import Head from "next/head";
import { FormEvent, useState } from "react";

import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/lib/api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "@/lib/slices/auth.slice";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

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
          <Input
            required
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label className="flex flex-col gap-1">
          Password
          <Input
            required
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <Button disabled={isLoading}>Login</Button>
      </form>
    </>
  );
}
