import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import JobsCarouselWithLogoFilter from "@/components/JobsCarouselWithLogoFilter";
import Avvvatars from "avvvatars-react";

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
    .select("id, title, company, url, tags, why_this_job, contributor_full_name, submitted_at")
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
      <div className="mx-auto max-w-6xl py-12 md:py-20">
        <h1 className="pb-5 font-nacelle text-4xl font-semibold text-[#273e3d] text-center flex items-center justify-center gap-4">
          Hey {profile?.full_name || user.user.email}!
          <Avvvatars value={profile?.full_name || user.user.email} style="shape" size={80} />
        </h1>
        <JobsCarouselWithLogoFilter jobs={jobsWithDomains} />
      </div>
    </section>
  );
}