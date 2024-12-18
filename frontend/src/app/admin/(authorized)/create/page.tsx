"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Button } from "@/components/Button";
import { Input, inputClassName } from "@/components/Input";
import { useCreateArticleMutation } from "@/lib/api";

type Inputs = {
    title: string;
    perex: string;
    content: string;
};

export default function AdminCreatePage() {
    const router = useRouter();
    const [createArticleMutation] = useCreateArticleMutation();

    const { register, handleSubmit } = useForm<Inputs>({});

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await createArticleMutation({
            title: data.title,
            perex: data.perex,
            content: data.content,
        });

        if (res.error) {
            toast.error("Failed to create article");
        } else {
            toast.success("Article created");

            router.push(`/admin/edit/${res.data.articleId}`);
        }
    };

    return (
        <>
            <Head>
                <title>Create article</title>
            </Head>

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
                        className={inputClassName}
                        {...register("content", {
                            required: true,
                            minLength: 10,
                        })}
                    />
                </label>

                <Button>Create</Button>
            </form>
        </>
    );
}
