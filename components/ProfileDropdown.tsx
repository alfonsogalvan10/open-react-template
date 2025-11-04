"use client";

import { useState, useEffect, useRef } from "react";
import { createClient } from "@/utils/supabase/client";
import Avvvatars from "avvvatars-react";

export default function ProfileDropdown({
  fullName,
  isAdmin,
}: {
  fullName: string;
  isAdmin: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/"; // Redirect to home or sign-in page
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full bg-[#273e3d] text-white px-4 py-2 hover:bg-[#355c58] focus:outline-none transition-colors duration-200 cursor-pointer"
      >
        <Avvvatars value={fullName} style="shape" size={30} />
        <span className="text-sm font-medium">{fullName}</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg">
          <ul className="py-2">
            <li>
              <a
                href="/private"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#273e3d] transition-all duration-200"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/submit-job"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#273e3d] transition-all duration-200"
              >
                Share a Job
              </a>
            </li>
            {isAdmin && (
              <li>
                <a
                  href="/admin-portal"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#273e3d] transition-all duration-200"
                >
                  Manage Jobs
                </a>
              </li>
            )}
          </ul>
          <div className="border-t">
            <button
              onClick={handleSignOut}
              className="block w-full px-4 py-3 text-sm text-red-500 hover:bg-red-100 hover:text-red-700 transition-all duration-200 cursor-pointer"
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}