import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import ApproveButton from '@/components/approve-button';

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
    .eq('approved', false); // Fetch only unapproved jobs

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
    <section className="bg-stone-200 min-h-screen px-4 sm:px-6">
      <div className="mx-auto max-w-6xl py-12 md:py-20">
        <h1 className="pb-5 font-nacelle text-4xl font-semibold text-[#273e3d] text-center">
          Admin Portal
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobsWithDomains?.map((job) => (
            <article
              key={job.id}
              className="group border border-gray-200 rounded-2xl shadow-lg p-4 bg-white flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  alt={`${job.company} logo`}
                  src={
                    job.domain
                      ? `https://cdn.brandfetch.io/${job.domain}`
                      : 'https://via.placeholder.com/150'
                  }
                  className="h-12 w-12 rounded-full bg-gray-100"
                />
                <div>
                  <h3 className="text-gray-900 font-semibold text-lg">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-500">{job.company}</p>
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <ApproveButton jobId={job.id} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}