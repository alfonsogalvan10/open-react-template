"use client";

import { useState } from "react";
import { insertJob } from "./actions";

export default function SubmitJobForm() {
  const [tags, setTags] = useState<string[]>([]); // State to manage tags
  const [currentTag, setCurrentTag] = useState<string>(""); // State for the current tag being typed

  const handleTagInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Check if the user typed a comma
    if (value.includes(",")) {
      const newTag = value.replace(",", "").trim(); // Remove the comma and trim spaces
      if (newTag && !tags.includes(newTag) && tags.length < 4) {
        setTags((prevTags) => [...prevTags, newTag]); // Add the new tag to the list
      }
      setCurrentTag(""); // Clear the input field
    } else {
      setCurrentTag(value); // Update the current tag being typed
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove)); // Remove the tag
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Add tags to the form data
    formData.append("tags", tags.join(","));

    await insertJob(formData);
  };

  return (
    <section className="bg-stone-200 h-screen flex items-center justify-center">
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
          {/* Role Name Input */}
          <div>
            <label
              className="mb-1 block text-sm font-bold text-left text-[#273e3d]"
              htmlFor="role-name"
            >
              Role Name <span className="text-red-500">*</span>
            </label>
            <input
              id="role-name"
              name="role-name"
              type="text"
              className="form-input w-full bg-stone-100 text-[#273e3d] placeholder-[#273e3d] rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#355c58] focus:outline-none"
              placeholder="Enter the role name"
              required
            />
          </div>
          {/* Tags Input */}
          <div>
            <label
              className="mb-1 block text-sm font-bold text-left text-[#273e3d]"
              htmlFor="tags"
            >
              Tags <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#273e3d] text-white text-sm font-medium px-2 py-1 rounded-full flex items-center gap-2"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="text-red-500 hover:text-red-700"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
            <input
              id="tags"
              name="tags"
              type="text"
              value={currentTag}
              onChange={handleTagInput}
              className="form-input w-full bg-stone-100 text-[#273e3d] placeholder-[#273e3d] rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#355c58] focus:outline-none mt-2"
              placeholder={
                tags.length < 4
                  ? "Type a tag and press comma"
                  : "Maximum of 4 tags allowed"
              }
              disabled={tags.length >= 4} // Disable input if max tags are reached
            />
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
              required
            ></textarea>
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