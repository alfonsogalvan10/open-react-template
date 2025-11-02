import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import EmblaCarousel from "@/components/EmblaCarousel";
import Avvvatars from 'avvvatars-react';

export default async function PrivatePage() {
  const supabase = await createClient();

  // Get the logged-in user
  const { data: user, error: userError } = await supabase.auth.getUser();
  if (userError || !user?.user) {
    redirect("/signin");
  }

  // Fetch the user's profile (full_name) from the profiles table
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.user.id) // Match the user's id with the profiles table
    .single(); // Fetch a single row

  if (profileError) {
    console.error("Error fetching profile:", profileError.message);
  }

  // Fetch jobs
  const { data: jobs, error: jobsError } = await supabase
    .from("jobs")
    .select("id, title, company, url, tags, why_this_job, contributor_full_name")
    .eq("approved", true)
    .eq("reviewed", true);

  if (jobsError) {
    console.error("Error fetching jobs:", jobsError.message);
  }

  // Extract domain from URL
  const jobsWithDomains = jobs?.map((job) => {
    try {
      const url = new URL(job.url);
      const domain = url.hostname.replace("www.", ""); // Extract domain (e.g., "apple.com")
      return { ...job, domain };
    } catch (error) {
      console.error("Invalid URL:", job.url);
      return { ...job, domain: null }; // Handle invalid URLs gracefully
    }
  });

  // Extract unique domain and company combinations for the logo bar
  const uniqueDomainCompanyPairs = Array.from(
    new Map(
      jobsWithDomains
        ?.filter((job) => job.domain && job.company) // Ensure both domain and company exist
        .map((job) => [`${job.domain}-${job.company}`, job]) // Use a unique key for each pair
    ).values()
  );

  return (
    <section className="bg-stone-200 min-h-[calc(100vh-4rem)] px-4 sm:px-6">
      {/* Main Content */}
      <div className="mx-auto max-w-6xl py-12 md:py-20">
        <h1 className="pb-5 font-nacelle text-4xl font-semibold text-[#273e3d] text-center flex items-center justify-center gap-4">
          Hey {profile?.full_name || user.user.email}!
          <Avvvatars value="alfonso@mgmail.com" style="shape" size={80} />
        </h1>
        {/* Logo Bar */}

        <div className="flex items-center justify-center gap-8 py-4 bg-transparent">
          {uniqueDomainCompanyPairs.slice(0, 5).map((job, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={`https://logo.clearbit.com/${job.domain}`} // Use Clearbit API for logos
                alt={`${job.domain} logo`}
                className="h-12 w-12 object-contain rounded-full" // Rounded logos
              />
              <p className="font-nacelle text-xl font-semibold text-[#273e3d]">
                {job.company}
              </p>
            </div>
          ))}
        </div>
        {jobsWithDomains && jobsWithDomains.length > 0 ? (
          <EmblaCarousel slides={jobsWithDomains} options={{ loop: true, watchDrag: false }} />
        ) : (
          <p className="text-center text-gray-500">
            No jobs available at the moment. Please check back later.
          </p>
        )}
      </div>
    </section>
  );
}