"use client";

import { useRouter } from "next/navigation";

export default function HeroButtons() {
  const router = useRouter();

  const handleTryNowClick = () => {
    router.push("/private"); // Redirect to the /private route
  };

  const handleApproveJobsClick = () => {
    router.push("/admin-portal"); // Redirect to the /admin-portal route
  };

  return (
    <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
      <div data-aos="fade-up" data-aos-delay={400}>
        <button
          className="btn relative w-full bg-stone-100 text-[#273e3d] hover:bg-green-50 sm:ml-4 sm:w-auto cursor-pointer text-2xl rounded-full"
          onClick={handleTryNowClick} // Redirect on click
        >
          <span className="relative inline-flex items-center">
            Try Now
            <span className="ml-1 tracking-normal text-[#273e3d] hover:bg-green-50 transition-transform group-hover:translate-x-0.5">
              -&gt;
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}