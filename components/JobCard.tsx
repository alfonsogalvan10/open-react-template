"use client";

import { useState } from "react";
import JobModal from "./JobModal";
import Avvvatars from "avvvatars-react";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    url: string;
    domain: string | null;
    tags?: string[];
    why_this_job?: string;
    contributor_full_name?: string; // Contributor's name from the profiles table
  };
}

export default function JobCard({ job }: JobCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <article
        key={job.id}
        className="group border border-gray-200 rounded-2xl shadow-lg p-4 bg-white flex flex-col gap-4"
      >
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
            <h3 className="text-gray-900 font-semibold text-lg">{job.title}</h3>
            <p className="text-sm text-gray-500">{job.company}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {job.tags?.map((tag, index) => (
            <span
              key={index}
              className="btn bg-gray-100 text-gray-700 hover:bg-gray-200 py-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <Avvvatars value={job.contributor_full_name || "Unknown"} style="character" size={40} />
            </div>
            <p className="text-sm text-gray-700 italic">“{job.why_this_job}”</p>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <button
            className="btn w-full bg-gray-100 text-gray-700 hover:bg-gray-200 py-2 rounded-full cursor-pointer"
            onClick={openModal}
          >
            View company info
          </button>
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn w-full bg-[#273e3d] text-white hover:bg-[#355c58] py-2 rounded-full cursor-pointer"
          >
            Apply
          </a>
        </div>
      </article>

      {/* JobModal */}
      <JobModal job={job} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}