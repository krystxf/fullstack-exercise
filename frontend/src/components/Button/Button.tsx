import { twMerge } from "@/utils/tw-merge.utils";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "danger";
};

export function Button(props: Props) {
  const { variant = "primary", className, ...rest } = props;

  return (
    <button
      className={twMerge(
        "mt-2 active:scale-[0.99] transition-all ease-in-out text-white rounded-md px-4 py-2",
        variant === "primary" && "bg-indigo-500 hover:bg-indigo-600",
        variant === "danger" && "bg-red-500 hover:bg-red-600",
        className
      )}
      {...rest}
    />
  );
}
