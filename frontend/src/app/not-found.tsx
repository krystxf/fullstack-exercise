import styles from "./not-found.module.css";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function NotFound() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-6 overflow-hidden px-4">
            <div className={styles.status_code}>404</div>

            <div className="space-y-2 text-center">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-5xl font-bold text-neutral-800"
                >
                    Cat&nbsp;Blog
                </Link>
                <p className="text-left text-2xl font-medium">
                    Oops, the page you were looking for cannot be found.
                </p>

                <Link
                    href={"/"}
                    className="flex w-fit items-center gap-1 rounded-xl bg-indigo-500 px-4 py-2 font-semibold text-neutral-50 transition-all hover:scale-[1.025] active:scale-[0.975]"
                >
                    Back to Articles
                    <ChevronRightIcon className="h-4" />
                </Link>
            </div>
        </div>
    );
}
