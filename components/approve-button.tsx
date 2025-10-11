"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ApproveButton({ jobId }: { jobId: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleApprove = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/jobs/${jobId}/approve`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to approve the job.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleApprove}
        disabled={loading}
        className="btn relative w-full bg-stone-100 text-[#273e3d] hover:bg-green-50 sm:ml-4 sm:w-auto cursor-pointer"
      >
        {loading ? "Approving..." : "Approve Job"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
