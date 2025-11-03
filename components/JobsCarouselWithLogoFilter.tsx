"use client";

import React, { useMemo, useState } from "react";
import EmblaCarousel from "./EmblaCarousel";
import JobCard from "@/components/JobCard";

type Job = {
  id: string;
  title: string;
  company: string;
  url: string;
  domain: string | null;
  tags?: string[];
  why_this_job?: string;
  contributor_full_name?: string;
  [key: string]: any;
};

export default function JobsCarouselWithLogoFilter({ jobs }: { jobs?: Job[] }) {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const uniqueDomainCompanyPairs = useMemo(() => {
    if (!jobs) return [];
    return Array.from(
      new Map(
        jobs
          .filter((job) => job.domain && job.company)
          .map((job) => [`${job.domain}-${job.company}`, job])
      ).values()
    );
  }, [jobs]);

  const displayedLogos = useMemo(() => {
    if (uniqueDomainCompanyPairs.length <= 4) return uniqueDomainCompanyPairs;

    // Shuffle the array
    const shuffled = [...uniqueDomainCompanyPairs].sort(() => Math.random() - 0.5);

    // Take the first 4 items
    return shuffled.slice(0, 4);
  }, [uniqueDomainCompanyPairs]);

  const filteredJobs = useMemo(() => {
    if (!jobs) return [];
    return selectedDomain
      ? jobs.filter((j) => j.domain === selectedDomain)
      : jobs;
  }, [jobs, selectedDomain]);

  const toggleDomain = (domain: string) => {
    setSelectedDomain((prev) => (prev === domain ? null : domain));
  };

  return (
    <div>
      {/* Logo Bar */}
      <div className="flex items-center justify-center gap-8 py-4 bg-transparent">
        {displayedLogos.map((job, index) => {
          const domain = job.domain!;
          const isSelected = selectedDomain === null || selectedDomain === domain;
          return (
            <button
              key={index}
              onClick={() => toggleDomain(domain)}
              className="flex flex-col items-center focus:outline-none"
              aria-pressed={selectedDomain === domain}
            >
              <img
                src={`https://cdn.brandfetch.io/${domain}`}
                alt={`${domain} logo`}
                className={`h-12 w-12 object-contain rounded-full transition-opacity duration-150 cursor-pointer ${
                  isSelected ? "opacity-100" : "opacity-50"
                }`}
              />
              <p
                className={`font-nacelle text-xl font-semibold text-[#273e3d] mt-2 ${
                  isSelected ? "opacity-100" : "opacity-50"
                }`}
              >
                {job.company}
              </p>
            </button>
          );
        })}
      </div>

      {/* Jobs Display */}
      {filteredJobs && filteredJobs.length > 4 ? (
        <EmblaCarousel slides={filteredJobs} options={{ loop: true, watchDrag: false }} />
      ) : filteredJobs && filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-8">No jobs available for the selected company.</p>
      )}
    </div>
  );
}