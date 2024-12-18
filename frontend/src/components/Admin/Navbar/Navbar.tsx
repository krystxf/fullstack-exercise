import { logout } from "@/lib/slices/auth.slice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { selectIsAuthenticated } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";

export function AdminNavbar() {
  const router = useRouter();

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  function handleLogoutWithRedirect() {
    dispatch(logout());

    router.push("/admin/login");
  }

  return (
    <div className="sticky top-0 z-10 flex w-full justify-center border-b border-b-neutral-200 bg-white px-8 py-4">
      <nav className="flex w-full max-w-screen-lg justify-between">
        <div className="flex items-center gap-2">
          <div className="flex w-full max-w-screen-lg justify-between">
            <Link href="/" className="text-lg font-semibold">
              Cat Blog
            </Link>
          </div>
          {isAuthenticated && (
            <>
              <Link href="/admin">Dashboard</Link>
              <Link href="/admin/create">Create</Link>
            </>
          )}
        </div>

        {isAuthenticated && (
          <button onClick={handleLogoutWithRedirect}>Logout</button>
        )}
      </nav>
    </div>
  );
}
