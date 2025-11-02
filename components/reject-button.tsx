"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RejectButton({ jobId }: { jobId: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleReject = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/jobs/${jobId}/reject`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.refresh(); // Refresh the page to reflect changes
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to reject the job.");
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
        onClick={handleReject}
        disabled={loading}
        className="btn relative w-full bg-red-100 text-[#273e3d] hover:bg-red-50 sm:ml-4 sm:w-auto cursor-pointer"
      >
        {loading ? "Rejecting..." : "Reject Job"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}