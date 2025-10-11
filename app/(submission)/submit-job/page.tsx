'use client';

import SubmitJobForm from "./SubmitJobForm";

export default function SubmitJob() {
  return (
    <section className="bg-[#273e3d]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <SubmitJobForm />
        </div>
      </div>
    </section>
  );
}