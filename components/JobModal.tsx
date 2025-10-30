"use client";

import { useEffect, useState } from "react";

interface JobModalProps {
  job: {
    domain: string | null;
    company: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function JobModal({ job, isOpen, onClose }: JobModalProps) {
  const [companyInfo, setCompanyInfo] = useState<{
    industry: string;
    headquarters: string;
    totalEmployees: string;
    yearFounded: number | string;
    revenue: string;
    website: string;
  } | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && job.domain) {
      const fetchCompanyInfo = async () => {
        try {
          setLoading(true);
          const response = await fetch("/api/enrich-companies", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ companyDomain: job.domain }),
          });

          if (!response.ok) {
            throw new Error("Failed to fetch company information");
          }

          const data = await response.json();

          // Log the entire response data for debugging
          console.log("POST response data:", data);

          setCompanyInfo({
            industry: data.about?.industry || "Unknown",
            headquarters: data.locations?.headquarters?.city?.name || "Unknown",
            totalEmployees: data.about?.totalEmployees || "Unknown",
            yearFounded: data.about?.yearFounded || "Unknown",
            revenue: data.finances?.revenue || "Unknown",
            website: `https://${data.domain?.domain || job.domain}`,
          });
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          console.error("Error fetching company information:", message);
          setError(message);
        } finally {
          setLoading(false);
        }
      };

      fetchCompanyInfo();
    }
  }, [isOpen, job.domain]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close the modal if the backdrop is clicked
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-lg w-11/12 max-w-md p-6 flex flex-col gap-6">
        {loading ? (
          <p className="text-center text-gray-500">Loading company information...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : companyInfo ? (
          <>
            <div className="flex items-center gap-4">
              <img
                alt={`${job.company} logo`}
                src={
                  job.domain
                    ? `https://cdn.brandfetch.io/${job.domain}`
                    : "https://via.placeholder.com/150"
                }
                className="h-16 w-16 rounded-full bg-gray-100"
              />
              <div>
                <h3 className="text-gray-900 font-bold text-xl">{job.company}</h3>
                <p className="text-lg text-gray-500">{companyInfo.industry}</p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-lg text-gray-700">
                <span className="font-bold">Headquarters:</span> {companyInfo.headquarters}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-bold">Employees:</span> {companyInfo.totalEmployees}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-bold">Year Founded:</span> {companyInfo.yearFounded}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-bold">Revenue:</span> {companyInfo.revenue}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-bold">Website:</span>{" "}
                <a
                    href={companyInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    {companyInfo.website}
                </a>
              </p>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <a
                href={companyInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#273e3d] text-white hover:bg-[#355c58] py-2 px-4 rounded-full cursor-pointer"
              >
                Visit Website
              </a>
              <button
                className="btn bg-gray-100 text-gray-700 hover:bg-gray-200 py-2 px-4 rounded-full cursor-pointer"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">No company information available.</p>
        )}
      </div>
    </div>
  );
}