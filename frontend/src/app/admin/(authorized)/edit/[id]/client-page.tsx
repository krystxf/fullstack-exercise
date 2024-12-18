"use client";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components/Button";
import { Input, inputClassName } from "@/components/Input";
import { useDeleteArticleMutation, useEditArticleMutation } from "@/lib/api";

type Props = {
    articleId: string;
    title: string;
    perex: string;
    content: string;
};

type Inputs = {
    title: string;
    perex: string;
    content: string;
};

export default function AdminEditClientPage(props: Props) {
    const router = useRouter();
    const [editArticleMutation] = useEditArticleMutation();
    const [deleteMutation] = useDeleteArticleMutation();

    const { register, handleSubmit } = useForm<Inputs>({
        defaultValues: props,
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await editArticleMutation({
            articleId: props.articleId,
            title: data.title,
            perex: data.perex,
            content: data.content,
        });

        if (res.error) {
            toast.error("Failed to update article");
        } else {
            toast.success("Article updated");
        }
    };

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
            <h1 className="mb-12 text-4xl font-medium">Create article</h1>

            <form
                className="flex flex-col gap-8"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label className="flex flex-col gap-1">
                    Title
                    <Input
                        {...register("title", {
                            required: true,
                            minLength: 3,
                        })}
                    />
                </label>
                <label className="flex flex-col gap-1">
                    Perex
                    <textarea
                        className={inputClassName}
                        {...register("perex", {
                            required: true,
                            minLength: 3,
                        })}
                    />
                </label>
                <label className="flex flex-col gap-1">
                    Content
                    <textarea
                        className={twMerge(inputClassName, "min-h-48")}
                        {...register("content", {
                            required: true,
                            minLength: 10,
                        })}
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
