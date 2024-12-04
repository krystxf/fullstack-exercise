import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full flex justify-center border-b border-b-neutral-200 py-4 px-8">
      <div className="w-full max-w-screen-lg">
        <Link href="/" className="text-lg font-semibold">
          Cat Blog
        </Link>
      </div>
    </nav>
  );
}
