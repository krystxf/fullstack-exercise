import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "danger";
};

export function Button(props: Props) {
    const { variant = "primary", className, ...rest } = props;

    return (
        <button
            className={twMerge(
                "mt-2 rounded-md px-4 py-2 text-white transition-all ease-in-out active:scale-[0.99]",
                variant === "primary" && "bg-indigo-500 hover:bg-indigo-600",
                variant === "danger" && "bg-red-500 hover:bg-red-600",
                className,
            )}
            {...rest}
        />
    );
}
