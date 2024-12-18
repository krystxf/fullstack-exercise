import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex w-full justify-center border-b border-b-neutral-200 bg-white px-8 py-4">
      <div className="w-full max-w-screen-lg">
        <Link href="/" className="text-lg font-semibold">
          Cat Blog
        </Link>
      </div>
    </nav>
  );
}
