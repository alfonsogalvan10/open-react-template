'use client';

import { useState } from 'react';
import { validateJobUrl } from './actions';

export default function SubmitJob() {
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const result = await validateJobUrl(formData); // Call the server-side action
    setMessage(result); // Update the message to display feedback
  };

  return (
    <section className="bg-[#273e3d]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <form className="mx-auto max-w-[400px]" onSubmit={handleSubmit}>
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

            {/* Submit Button */}
            <div className="mt-6 space-y-5">
              <button
                type="submit"
                className="btn w-full bg-gradient-to-t from-green-800 to-green-700 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.16)] hover:bg-[length:100%_150%]"
              >
                Validate
              </button>
            </div>
          </form>

          {/* Feedback Message */}
          {message && (
            <div className="mt-4 text-center text-white">
              {message === 'All good' ? (
                <p className="text-green-400">{message}</p>
              ) : (
                <p className="text-red-400">{message}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}