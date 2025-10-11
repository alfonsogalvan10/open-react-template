"use client";

import { insertJob } from "./actions";

export default function SubmitJobForm() {
  return (
    <form
      className="mx-auto max-w-[400px]"
      onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        await insertJob(formData);
      }}
    >
      <h2 className="mb-6 text-3xl font-bold text-white">Submit a Job</h2>
      <div className="space-y-5">
        {/* Company Name Input */}
        <div>
          <label
            className="mb-1 block text-sm font-medium text-stone-200"
            htmlFor="company-name"
          >
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            id="company-name"
            name="company-name"
            type="text"
            className="form-input w-full bg-stone-100 text-[#273e3d] placeholder-[#273e3d]"
            placeholder="Enter the company name"
            required
          />
        </div>
        {/* URL Input */}
        <div>
          <label
            className="mb-1 block text-sm font-medium text-stone-200"
            htmlFor="url"
          >
            URL <span className="text-red-500">*</span>
          </label>
          <input
            id="url"
            name="url"
            type="url"
            className="form-input w-full bg-stone-100 text-[#273e3d] placeholder-[#273e3d]"
            placeholder="Enter the job URL"
            required
          />
        </div>
        {/* Role Name Input */}
        <div>
          <label
            className="mb-1 block text-sm font-medium text-stone-200"
            htmlFor="role-name"
          >
            Role Name <span className="text-red-500">*</span>
          </label>
          <input
            id="role-name"
            name="role-name"
            type="text"
            className="form-input w-full bg-stone-100 text-[#273e3d] placeholder-[#273e3d]"
            placeholder="Enter the role name"
            required
          />
        </div>
      </div>
      {/* Submit Button */}
      <div className="mt-6 space-y-5">
        <button
          type="submit"
          className="btn w-full bg-stone-100 text-[#273e3d] hover:bg-green-50 cursor-pointer"
        >
          Submit Job
        </button>
      </div>
    </form>
  );
}