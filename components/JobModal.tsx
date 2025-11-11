"use client";

import { useEffect, useState } from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

interface JobModalProps {
  job: {
    domain: string | null;
    company: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

// Cache for company information
const companyInfoCache = new Map<string, any>();

export default function JobModal({ job, isOpen, onClose }: JobModalProps) {
  const [companyInfo, setCompanyInfo] = useState<{
    logo: string;
    name: string;
    size: string;
    location: string;
    industry: string;
    about: string;
    founded: string;
    revenue: string;
    stock: string;
    website: string;
    socials: {
      linkedin?: string;
      twitter?: string;
      facebook?: string;
    };
  } | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && job.domain) {
      const domain = job.domain;
      // Check if the company info is already cached
      if (companyInfoCache.has(domain)) {
        setCompanyInfo(companyInfoCache.get(domain));
        setLoading(false);
        return;
      }

      const fetchCompanyInfo = async () => {
        try {
          setLoading(true);
          const response = await fetch("/api/enrich-companies", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ companyDomain: domain }),
          });

          if (!response.ok) {
            throw new Error("Failed to fetch company information");
          }

          const data = await response.json();

          const fetchedInfo = {
            logo: data.assets?.logoSquare?.src || "https://via.placeholder.com/200",
            name: data.about?.name || "Unknown",
            size: `${data.about?.totalEmployeesExact || "Unknown"} employees`,
            location: [
              data.locations?.headquarters?.city?.name,
              data.locations?.headquarters?.state?.name,
              data.locations?.headquarters?.country?.name,
            ]
              .filter(Boolean)
              .join(", "),
            industry: data.about?.industry || "Unknown",
            about: data.descriptions?.primary
              ? `${data.descriptions.primary.slice(0, 250)}${
                  data.descriptions.primary.length > 250 ? "..." : ""
                }`
              : "No description available.",
            founded: data.about?.yearFounded ? `Founded in ${data.about.yearFounded}` : "Unknown",
            revenue: data.finances?.revenue || "Unknown",
            stock: data.finances?.stockSymbol ? `NASDAQ: ${data.finances.stockSymbol}` : "Unknown",
            website: data.domain?.alias || `https://${domain}`,
            socials: {
              linkedin: data.socials?.linkedin?.url,
              twitter: data.socials?.twitter?.url,
              facebook: data.socials?.facebook?.url,
            },
          };

          // Cache the fetched company info
          companyInfoCache.set(domain, fetchedInfo);

          setCompanyInfo(fetchedInfo);
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
                  className="h-12 w-12 rounded-full bg-gray-100"
                />
              <div>
                <h3 className="text-gray-900 font-bold text-xl">{companyInfo.name}</h3>
                <p className="text-sm text-gray-500">{companyInfo.industry}</p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-700">
                <span className="font-bold">Company Size:</span> {companyInfo.size}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-bold">Location:</span> {companyInfo.location}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-bold">About:</span> {companyInfo.about}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-bold">Founded:</span> {companyInfo.founded}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-bold">Revenue:</span> {companyInfo.revenue}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-bold">Stock:</span> {companyInfo.stock}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-bold">Website:</span>{" "}
                <a
                  href={`https://${job.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {companyInfo.website}
                </a>
              </p>
              <div className="flex gap-4 mt-4">
                {companyInfo.socials.linkedin && (
                  <a
                    href={companyInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FaLinkedin size={32} />
                  </a>
                )}
                {companyInfo.socials.twitter && (
                  <a
                    href={companyInfo.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 transition-colors"
                  >
                    <FaTwitter size={32} />
                  </a>
                )}
                {companyInfo.socials.facebook && (
                  <a
                    href={companyInfo.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:text-blue-900 transition-colors"
                  >
                    <FaFacebook size={32} />
                  </a>
                )}
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-6">
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