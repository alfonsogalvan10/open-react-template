"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import Logo from "./logo";
import SignOutButton from "../signout-button";

export default function Header() {
  const pathname = usePathname(); // Get the current route

  return (
    <header className="z-30 w-full bg-stone-200 pt-12 pb-4 md:pt-6 md:pb-6 sticky top-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-stone-200 px-3">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            {pathname === "/private" ? (
              // Show only the Sign Out button on the /private route
              <li>
                <SignOutButton />
              </li>
            ) : (
              // Show Sign In and Register buttons on other routes
              <>
                <li>
                  <Link
                    href="/private"
                    className="btn group w-full bg-stone-100 text-[#273e3d] hover:bg-green-50 sm:w-auto px-4 py-2 text-base font-medium"
                  >
                    <span className="relative inline-flex items-center">
                      Sign In
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="btn group w-full bg-[#273e3d] text-white hover:bg-[#355c58] sm:w-auto px-4 py-2 text-base font-medium"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
