"use client";

import Link from "next/link";
import Logo from "./logo";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import ProfileDropdown from "@/components/ProfileDropdown";

export default function Header() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [fullName, setFullName] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        setIsSignedIn(true);
        const { data: profile } = await supabase
          .from("profiles")
          .select("full_name, admin")
          .eq("id", session.user.id)
          .single();

        setFullName(profile?.full_name || "User");
        setIsAdmin(profile?.admin || false);
      }
    };

    checkAuth();
  }, []);

  return (
    <header className="z-30 w-full bg-transparent pt-2 pb-1 md:pt-2 md:pb-1 sticky top-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-transparent px-3">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            {isSignedIn ? (
              <li>
                <ProfileDropdown fullName={fullName} isAdmin={isAdmin} />
              </li>
            ) : (
              <>
                <li>
                  <Link
                    href="/private"
                    className="btn relative w-full bg-stone-100 text-[#273e3d] hover:bg-green-50 sm:ml-4 sm:w-auto cursor-pointer text-xl rounded-full"
                  >
                    <span className="relative inline-flex items-center">
                      Sign In
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="btn group w-full bg-[#273e3d] text-white hover:bg-[#355c58] sm:w-auto px-4 py-2 text-base text-xl rounded-full"
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
