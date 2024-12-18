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
    <div className="w-full flex justify-center border-b border-b-neutral-200 py-4 px-8 sticky top-0 bg-white z-10">
      <nav className="w-full max-w-screen-lg flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="w-full max-w-screen-lg flex justify-between">
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
