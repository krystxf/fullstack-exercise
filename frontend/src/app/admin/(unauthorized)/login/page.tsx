"use client";

import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/lib/api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "@/lib/slices/auth.slice";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  password: string;
};

export default function AdminLoginPage() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<Inputs>({});

  const dispatch = useDispatch();
  const [loginMutation, { isLoading }] = useLoginMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await loginMutation({
      username: data.username,
      password: data.password,
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
  };

  return (
    <form
      className="m-auto mt-24 flex flex-col gap-2 max-w-96"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="flex flex-col gap-1">
        Username
        <Input
          {...register("username", {
            required: true,
          })}
        />
      </label>

      <label className="flex flex-col gap-1">
        Password
        <Input
          type="password"
          {...register("password", {
            required: true,
          })}
        />
      </label>

      <Button disabled={isLoading}>Login</Button>
    </form>
  );
}
