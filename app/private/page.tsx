import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import JobsCarouselWithLogoFilter from "@/components/JobsCarouselWithLogoFilter";

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data: user, error: userError } = await supabase.auth.getUser();
  if (userError || !user?.user) {
    redirect("/signin");
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.user.id)
    .single();

  if (profileError) {
    console.error("Error fetching profile:", profileError.message);
  }

  const { data: jobs, error: jobsError } = await supabase
    .from("jobs")
    .select("id, role_type, company, url, tags, why_this_job, contributor_full_name, submitted_at")
    .eq("approved", true)
    .eq("reviewed", true)
    .order("submitted_at", { ascending: false });

  if (jobsError) {
    console.error("Error fetching jobs:", jobsError.message);
  }

  const jobsWithDomains = jobs?.map((job) => {
    try {
      const url = new URL(job.url);
      const domain = url.hostname.replace("www.", "");
      return { ...job, domain };
    } catch (error) {
      console.error("Invalid URL:", job.url);
      return { ...job, domain: null };
    }
  });

  return (
    <section className="bg-stone-200 min-h-[calc(100vh-4rem)] px-4 sm:px-6">
      <div className="mx-auto max-w-6xl py-10 md:py-10">
        <h1 className="pb-5 font-nacelle text-4xl font-semibold text-[#273e3d] text-center flex items-center justify-left gap-4">
          Welcome back!
        </h1>
        <h2 className="pb-5 font-nacelle text-2xl text-[#273e3d] text-center flex items-center justify-left gap-4">
          Explore the latest opportunities from Europe's most exciting startups and scale-ups
        </h2>
        {/* Heading */}
        <h3 className="text-2xl font-nacelle font-semibold text-[#273e3d] justify-left mb-4">
          {profile?.full_name}, here are companies that are hiring now:
        </h3>
        <JobsCarouselWithLogoFilter jobs={jobsWithDomains} />
      </div>
    </section>
  );
}