import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

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
  const { data: jobs, error: jobsError } = await supabase.from('jobs').select();

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
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <h1 className="text-gray-900 text-3xl font-semibold mb-8">
            Welcome back, {profile?.full_name || user.user.email}!
          </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobsWithDomains?.map((job) => (
              <article
                key={job.id}
                className="group border border-gray-200 rounded-lg shadow-md"
              >
                <img
                  alt={`${job.company} logo`}
                  src={
                    job.domain
                      ? `https://cdn.brandfetch.io/${job.domain}`
                      : 'https://via.placeholder.com/150'
                  }
                  className="h-32 w-full rounded-t-xl bg-gray-100"
                />
                <div className="p-2">
                  <h3 className="text-gray-900 font-semibold text-gray-900">
                    {job.title}
                  </h3>
                  <p className="text-xs text-gray-500">{job.company}</p>
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-full bg-stone-100 text-[#273e3d] hover:bg-green-50 mt-2"
                  >
                    View Job
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}