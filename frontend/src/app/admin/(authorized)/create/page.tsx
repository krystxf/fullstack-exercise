"use client";
import { Button } from "@/components/Button";
import { Input, inputClassName } from "@/components/Input";
import { useCreateArticleMutation } from "@/lib/api";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function AdminCreatePage() {
  const router = useRouter();
  const [createArticleMutation] = useCreateArticleMutation();

  const [title, setTitle] = useState("");
  const [perex, setPerex] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await createArticleMutation({
      title,
      perex,
      content,
    });

    if (res.error) {
      toast.error("Failed to create article");
    } else {
      toast.success("Article created");

      router.push(`/admin/edit/${res.data.articleId}`);
    }
  }

  return (
    <>
      <Head>
        <title>Create article</title>
      </Head>

      <h1 className="text-4xl font-medium mb-12">Create article</h1>

      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-1">
          Title
          <Input
            required
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-1">
          Perex
          <textarea
            required
            name="perex"
            className={inputClassName}
            value={perex}
            onChange={(e) => setPerex(e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-1">
          Content
          <textarea
            required
            name="content"
            className={inputClassName}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>

        <Button>Create</Button>
      </form>
    </>
  );
}
