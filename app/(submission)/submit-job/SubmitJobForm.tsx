"use client";

import { insertJob } from "./actions";

export default function SubmitJobForm() {
  return (
    <section className="bg-stone-200 h-screen flex items-center justify-center">
      <div className="bg-white border border-stone-300 rounded-2xl shadow-lg p-8 max-w-md w-full">
        <h2 className="pb-5 text-2xl font-semibold text-[#273e3d] text-center">
          Submit a Job
        </h2>
        <form
          className="space-y-5"
          onSubmit={async (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            await insertJob(formData);
          }}
        >
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
              className="form-input w-full bg-stone-100 text-[#273e3d] placeholder-[#273e3d] rounded-lg border border-stone-300 focus:ring-2 focus:ring-green-200 focus:outline-none"
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
              className="form-input w-full bg-stone-100 text-[#273e3d] placeholder-[#273e3d] rounded-lg border border-stone-300 focus:ring-2 focus:ring-green-200 focus:outline-none"
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
              className="form-input w-full bg-stone-100 text-[#273e3d] placeholder-[#273e3d] rounded-lg border border-stone-300 focus:ring-2 focus:ring-green-200 focus:outline-none"
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
            <input
              id="tags"
              name="tags"
              type="text"
              className="form-input w-full bg-stone-100 text-[#273e3d] placeholder-[#273e3d] rounded-lg border border-stone-300 focus:ring-2 focus:ring-green-200 focus:outline-none"
              placeholder="Enter tags separated by commas"
              required
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
              className="form-input w-full bg-stone-100 text-[#273e3d] placeholder-[#273e3d] rounded-lg border border-stone-300 focus:ring-2 focus:ring-green-200 focus:outline-none"
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