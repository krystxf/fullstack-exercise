import { Link } from "@/components/Link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 w-full flex justify-center py-4 px-8">
      <div className="w-full max-w-screen-lg">
        <Link href="/admin/login">Admin panel</Link>
      </div>
    </footer>
  );
}
