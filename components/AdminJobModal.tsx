"use client";

import React from "react";

interface AdminJobModalProps {
  job: {
    id: string;
    title: string;
    company: string;
    url: string;
    domain: string | null;
    tags?: string[];
    why_this_job?: string;
    contributor_full_name?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminJobModal({ job, isOpen, onClose }: AdminJobModalProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-lg w-11/12 max-w-md p-6 flex flex-col gap-6">
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
            <h3 className="text-gray-900 font-bold text-xl">{job.title}</h3>
            <p className="text-lg text-gray-500">{job.company}</p>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <p className="text-lg text-gray-700">
            <span className="font-bold">Contributor:</span>{" "}
            {job.contributor_full_name || "Unknown"}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-bold">Why this job:</span>{" "}
            {job.why_this_job || "No details provided."}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-bold">Tags:</span>{" "}
            {job.tags && job.tags.length > 0
              ? job.tags.join(", ")
              : "No tags available."}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-bold">URL:</span>{" "}
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {job.url}
            </a>
          </p>
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-[#273e3d] text-white hover:bg-[#355c58] py-2 px-4 rounded-full cursor-pointer"
          >
            Visit Job
          </a>
          <button
            className="btn bg-gray-100 text-gray-700 hover:bg-gray-200 py-2 px-4 rounded-full cursor-pointer"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}