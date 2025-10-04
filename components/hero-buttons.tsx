"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroButtons() {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace this with your actual password
    if (password === "123") {
      setShowModal(false);
      setPassword(""); // Clear the password field
      setError(""); // Clear any error messages
      router.push("/signin"); // Redirect to the desired page
    } else {
      setError("Incorrect password. Please try again.");
      setPassword(""); // Clear the password field after an incorrect attempt
    }
  };

  return (
    <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
      <div data-aos="fade-up" data-aos-delay={400}>
        <button
          className="btn relative w-full bg-stone-100 text-[#273e3d] hover:bg-green-50 sm:ml-4 sm:w-auto cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <span className="relative inline-flex items-center">
            Explore Jobs
            <span className="ml-1 tracking-normal text-[#273e3d] hover:bg-green-50 transition-transform group-hover:translate-x-0.5">
              -&gt;
            </span>
          </span>
        </button>
      </div>
      <div data-aos="fade-up" data-aos-delay={600}>
        <a
          className="btn relative w-full bg-stone-100 text-[#273e3d] hover:bg-green-50 sm:ml-4 sm:w-auto"
          href="#0"
        >
          Pricing
        </a>
      </div>

      {/* Password Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-stone-200 rounded-lg shadow-lg w-full max-w-md m-4">
            <form onSubmit={handlePasswordSubmit} className="p-6">
              <h2 className="text-xl font-semibold text-[#273e3d] mb-4">
                Enter Password
              </h2>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-[#273e3d] rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-stone-500"
                placeholder="Enter password"
                required
              />
              {error && (
                <p className="text-red-500 text-sm mb-4">{error}</p>
              )}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setPassword(""); // Clear the password field when closing the modal
                    setError(""); // Clear any error messages
                  }}
                  className="px-4 py-2 bg-stone-100 text-[#273e3d] rounded-md hover:bg-green-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#273e3d] text-white hover:bg-[#355c58] rounded-md cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}