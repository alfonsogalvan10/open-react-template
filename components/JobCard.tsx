"use client";

import { useState } from "react";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    url: string;
    domain: string | null;
    tags?: string[];
    why_this_job?: string;
  };
}

export default function JobCard({ job }: JobCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal(); // Close the modal if the backdrop is clicked
    }
  };

  // Hardcoded company information for Coverflex
  const coverflexInfo = {
    name: "Coverflex",
    industry: "Fintech",
    headquarters: "Lisbon, Portugal",
    size: "51-200 employees",
    mission:
      "To revolutionize employee benefits by providing flexible and personalized solutions for modern workplaces.",
    website: "https://www.coverflex.com",
    insights: [
      "Ranked as one of the top 10 startups in Portugal.",
      "Backed by leading venture capital firms.",
      "Committed to creating a flexible and inclusive workplace.",
    ],
  };

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
          <p className="text-sm text-gray-700 italic">“{job.why_this_job}”</p>
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

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-opacity-50"
          onClick={handleBackdropClick} // Close modal when clicking outside
        >
          <div className="bg-white rounded-2xl shadow-lg w-11/12 max-w-md p-6 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img
                alt={`${coverflexInfo.name} logo`}
                src={
                  job.domain
                    ? `https://cdn.brandfetch.io/${job.domain}`
                    : "https://via.placeholder.com/150"
                }
                className="h-16 w-16 rounded-full bg-gray-100"
              />
              <div>
                <h3 className="text-gray-900 font-bold text-xl">
                  {coverflexInfo.name}
                </h3>
                <p className="text-lg text-gray-500">{coverflexInfo.industry}</p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-lg text-gray-700">
                <span className="font-bold">Headquarters:</span> {coverflexInfo.headquarters}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-bold">Size:</span> {coverflexInfo.size}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-bold">Mission:</span> {coverflexInfo.mission}
              </p>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <h4 className="text-gray-900 font-bold text-lg mb-2">
                Insights:
              </h4>
              <ul className="list-disc list-inside text-gray-700">
                {coverflexInfo.insights.map((insight, index) => (
                  <li key={index} className="text-base text-gray-900">
                    {insight}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <a
                href={coverflexInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#273e3d] text-white hover:bg-[#355c58] py-2 px-4 rounded-full cursor-pointer"
              >
                Visit Website
              </a>
              <button
                className="btn bg-gray-100 text-gray-700 hover:bg-gray-200 py-2 px-4 rounded-full cursor-pointer"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}