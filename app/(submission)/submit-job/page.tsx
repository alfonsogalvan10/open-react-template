'use client';

import { insertJob } from "./actions";

// import { useState } from 'react';
// import { getWebsiteLogo } from './actions'; // Import the function

export default function SubmitJob() {
  // const [imageUrl, setImageUrl] = useState<string | null>(null);

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const formData = new FormData(event.currentTarget);
  //   const url = formData.get('url') as string;

  //   // Call getWebsiteLogo to extract the image
  //   const result = await getWebsiteLogo(url);
  //   setImageUrl(result); // Update the image URL to display the image
  // };

  return (
    <section className="bg-[#273e3d]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
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
              {/* URL Input */}
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
            </div>
            <div className="space-y-5">
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
            </div>
            <div className="space-y-5">
              {/* URL Input */}
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
                className="btn w-full bg-gradient-to-t from-green-800 to-green-700 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.16)] hover:bg-[length:100%_150%]"
              >
                Submit Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}