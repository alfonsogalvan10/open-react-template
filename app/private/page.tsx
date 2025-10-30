import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import EmblaCarousel from '@/components/EmblaCarousel';

export default async function PrivatePage() {
  const supabase = await createClient();

  // Get the logged-in user
  const { data: user, error: userError } = await supabase.auth.getUser();
  if (userError || !user?.user) {
    redirect('/signin');
  }

  // Fetch the user's profile (full_name) from the profiles table
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('full_name')
    .eq('id', user.user.id) // Match the user's id with the profiles table
    .single(); // Fetch a single row

  if (profileError) {
    console.error('Error fetching profile:', profileError.message);
  }

  // Fetch jobs
  const { data: jobs, error: jobsError } = await supabase
    .from('jobs')
    .select()
    .eq('approved', true);

  if (jobsError) {
    console.error('Error fetching jobs:', jobsError.message);
  }

  // Extract domain from URL
  const jobsWithDomains = jobs?.map((job) => {
    try {
      const url = new URL(job.url);
      const domain = url.hostname.replace('www.', ''); // Extract domain (e.g., "apple.com")
      return { ...job, domain };
    } catch (error) {
      console.error('Invalid URL:', job.url);
      return { ...job, domain: null }; // Handle invalid URLs gracefully
    }
  });

  return (
    <section className="bg-stone-200 min-h-[calc(100vh-4rem)] px-4 sm:px-6"> {/* Dynamic height */}
      <div className="mx-auto max-w-6xl py-12 md:py-20">
        <h1 className="pb-5 font-nacelle text-4xl font-semibold text-[#273e3d] text-center">
          Welcome back, {profile?.full_name || user.user.email}!
        </h1>
        {jobsWithDomains && jobsWithDomains.length > 0 ? (
          <EmblaCarousel slides={jobsWithDomains} options={{ loop: true }} />
        ) : (
          <p className="text-center text-gray-500">
            No jobs available at the moment. Please check back later.
          </p>
        )}
      </div>
    </section>
  );
}