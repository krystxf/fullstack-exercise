import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const inputClassName = "w-full p-2 border border-gray-300 rounded";

export function Input(props: Props) {
    return <input className={inputClassName} {...props} />;
}
