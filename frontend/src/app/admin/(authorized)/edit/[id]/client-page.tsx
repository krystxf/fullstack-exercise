"use client";

import { Button } from "@/components/Button";
import { Input, inputClassName } from "@/components/Input";
import { useEditArticleMutation, useDeleteArticleMutation } from "@/lib/api";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

type Props = {
  articleId: string;
  title: string;
  perex: string;
  content: string;
};

export default function AdminEditClientPage(props: Props) {
  const router = useRouter();
  const [editArticleMutation] = useEditArticleMutation();
  const [deleteMutation] = useDeleteArticleMutation();

  const [title, setTitle] = useState(props.title);
  const [perex, setPerex] = useState(props.perex);
  const [content, setContent] = useState(props.content);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await editArticleMutation({
      articleId: props.articleId,
      title,
      perex,
      content,
    });

    if (res.error) {
      toast.error("Failed to update article");
    } else {
      toast.success("Article updated");
    }
  }

  async function handleDeleteArticle() {
    const res = await deleteMutation(props.articleId);
    console.log(res);

    if (res.error) {
      toast.error("Failed to delete article");
    } else {
      toast.success(`Deleted: ${props.title}`);
      router.push("/admin");
    }
  }

  return (
    <>
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
            className={inputClassName + " min-h-48"}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>

        <div className="flex w-full gap-2">
          <Button type="submit" className="w-full">
            Update
          </Button>
          <Button
            variant="danger"
            type="button"
            onClick={handleDeleteArticle}
            className="w-full"
          >
            Delete
          </Button>
        </div>
      </form>
    </>
  );
}
