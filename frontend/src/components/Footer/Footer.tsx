import { Link } from "@/components/Link";

export function Footer() {
    return (
        <footer className="flex w-full justify-center border-t border-neutral-200 px-8 py-4">
            <div className="w-full max-w-screen-lg">
                <Link href="/admin/login">Admin panel</Link>
            </div>
        </footer>
    );
}
