"use client";

import { useState } from "react";
import { insertJob } from "./actions";
import {
  FaGlobe,
  FaBuilding,
  FaBriefcase,
  FaBolt,
  FaWrench,
  FaPalette,
  FaDatabase,
  FaSeedling,
  FaRocket,
  FaUsers,
  FaClock,
  FaChartLine,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";

export default function SubmitJobForm() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]); // State to manage selected tags
  const [whyThisJob, setWhyThisJob] = useState(""); // State to track textarea input

  // Hardcoded tag options with icons
  const tagOptions = [
    { label: "Remote", icon: <FaGlobe /> },
    { label: "Hybrid", icon: <FaBuilding /> },
    { label: "Contract", icon: <FaBolt /> },
    { label: "Full-time", icon: <FaBriefcase /> },
    { label: "Entry-level", icon: <FaSeedling /> },
    { label: "Mid-level", icon: <FaWrench /> },
    { label: "Senior", icon: <FaRocket /> },
    { label: "Great Team", icon: <FaUsers /> },
    { label: "Flexible", icon: <FaClock /> },
    { label: "Growth Opportunities", icon: <FaChartLine /> },
    { label: "Inclusive", icon: <FaHandshake /> },
    { label: "Innovative", icon: <FaLightbulb /> },
  ];

  const toggleTagSelection = (tag: string) => {
    if (selectedTags.includes(tag)) {
      // Remove tag if already selected
      setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag));
    } else if (selectedTags.length < 4) {
      // Add tag if not already selected and limit is not reached
      setSelectedTags((prevTags) => [...prevTags, tag]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Add selected tags to the form data
    formData.append("tags", selectedTags.join(","));

    await insertJob(formData);
  };

  return (
    <section className="bg-stone-200 min-h-screen flex items-center justify-center py-12">
      <div className="bg-white border border-stone-300 rounded-2xl shadow-lg p-8 max-w-md w-full">
        <h2 className="pb-5 text-2xl font-semibold text-[#273e3d] text-center">
          Submit a Job
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Company Name Input */}
          <div>
            <label
              className="mb-1 block text-sm font-bold text-left text-[#273e3d]"
              htmlFor="company-name"
            >
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              id="company-name"
              name="company-name"
              type="text"
              className="form-input w-full bg-stone-100 text-[#273e3d] placeholder-[#273e3d] rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#355c58] focus:outline-none"
              placeholder="Enter the company name"
              required
            />
          </div>
          {/* URL Input */}
          <div>
            <label
              className="mb-1 block text-sm font-bold text-left text-[#273e3d]"
              htmlFor="url"
            >
              URL <span className="text-red-500">*</span>
            </label>
            <input
              id="url"
              name="url"
              type="url"
              className="form-input w-full bg-stone-100 text-[#273e3d] placeholder-[#273e3d] rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#355c58] focus:outline-none"
              placeholder="Enter the job URL"
              required
            />
          </div>
          {/* Role Type Selection */}
          <div>
            <label
              className="mb-1 block text-sm font-bold text-left text-[#273e3d]"
              htmlFor="role-type"
            >
              Role Type <span className="text-red-500">*</span>
            </label>
            <select
              id="role-type"
              name="role-type"
              className="form-select w-full bg-stone-100 text-[#273e3d] placeholder-[#273e3d] rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#355c58] focus:outline-none"
              defaultValue="" // Use defaultValue to set the initial value
              required
            >
              <option value="" disabled>
                Select the role type
              </option>
              {[
                "Data Analyst",
                "Platform Engineer",
                "Analytics Engineer",
                "Data Engineer",
                "Solutions Engineer",
                "Data Scientist",
                "ML Engineer",
                "AI Engineer",
                "Big Data Engineer",
                "Data Architect",
                "BI Developer",
                "Data Governance Specialist",
                "Data Strategist",
                "Data Operations Engineer",
                "Cloud Data Engineer",
                "Data Product Manager",
                "Data Security Analyst",
              ].map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          {/* Tags Selection */}
          <div>
            <label
              className="mb-1 block text-sm font-bold text-left text-[#273e3d]"
              htmlFor="tags"
            >
              Tags <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {tagOptions.map(({ label, icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => toggleTagSelection(label)}
                  className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 cursor-pointer ${
                    selectedTags.includes(label)
                      ? "bg-[#273e3d] text-white"
                      : "bg-stone-100 text-[#273e3d] border border-stone-300"
                  } hover:bg-[#355c58] hover:text-white transition-colors`}
                >
                  {icon} {label}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Select up to 4 tags to describe the job.
            </p>
          </div>
          {/* Why This Job Input */}
          <div>
            <label
              className="mb-1 block text-sm font-bold text-left text-[#273e3d]"
              htmlFor="why-this-job"
            >
              Why This Job? <span className="text-red-500">*</span>
            </label>
            <textarea
              id="why-this-job"
              name="why-this-job"
              className="form-input w-full bg-stone-100 text-[#273e3d] placeholder-[#273e3d] rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#355c58] focus:outline-none"
              placeholder="Explain why you recommend this job"
              rows={3}
              maxLength={150} // Limit input to 150 characters
              value={whyThisJob}
              onChange={(e) => setWhyThisJob(e.target.value)}
              required
            ></textarea>
            <p className="text-sm text-gray-500 mt-2">
              {whyThisJob.length}/150 characters
            </p>
          </div>
          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="btn w-full bg-[#273e3d] text-white font-bold hover:bg-[#355c58] py-2 text-base rounded-full cursor-pointer"
            >
              Submit Job
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}