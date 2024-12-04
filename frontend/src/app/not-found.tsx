import styles from "./not-found.module.css";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-6 px-4  overflow-hidden">
      <div className={styles.status_code}>404</div>

      <div className="space-y-2 text-center">
        <Link
          href="/"
          className="font-bold text-neutral-800  text-5xl flex items-center gap-2"
        >
          Cat&nbsp;Blog
        </Link>
        <p className="text-2xl font-medium text-left">
          Oops, the page you were looking for cannot be found.
        </p>

        <Link
          href={"/"}
          className="px-4 py-2 bg-indigo-500 hover:scale-[1.025] font-semibold active:scale-[0.975] rounded-xl flex gap-1 items-center text-neutral-50 transition-all w-fit"
        >
          Back to Articles
          <ChevronRightIcon className="h-4" />
        </Link>
      </div>
    </div>
  );
}
