"use client";

import { useState } from "react";
import ApproveButton from "@/components/approve-button";
import RejectButton from "@/components/reject-button";
import AdminJobModal from "@/components/AdminJobModal";

interface Job {
  id: string;
  title: string;
  company: string;
  url: string;
  domain: string | null;
  tags?: string[];
  why_this_job?: string;
  contributor_full_name?: string;
  [key: string]: any;
}

export default function AdminPortal({ jobs }: { jobs?: Job[] }) {
  // State for modal
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
  };

  return (
    <section className="bg-stone-200 min-h-screen px-4 sm:px-6">
      <div className="mx-auto max-w-6xl py-12 md:py-20">
        <h1 className="pb-5 font-nacelle text-4xl font-semibold text-[#273e3d] text-center">
          Admin Portal
        </h1>
        {jobs && jobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {jobs.map((job) => (
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
                    <h3 className="text-gray-900 font-semibold text-lg">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-500">{job.company}</p>
                  </div>
                </div>
                <div className="flex justify-evenly items-center mt-4">
                  <ApproveButton jobId={job.id} />
                  <RejectButton jobId={job.id} />
                  <button
                    onClick={() => openModal(job)} // Open modal with job details
                    className="btn bg-blue-100 text-[#273e3d] hover:bg-blue-50 sm:w-auto cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No more jobs to review for now.
          </p>
        )}
      </div>

      {/* AdminJobModal */}
      {isModalOpen && selectedJob && (
        <AdminJobModal job={selectedJob} isOpen={isModalOpen} onClose={closeModal} />
      )}
    </section>
  );
}