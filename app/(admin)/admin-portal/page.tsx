import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import AdminPortal from '@/components/AdminPortal'; // Import the Client Component

export default async function PrivatePage() {
  const supabase = await createClient();

  // Get the logged-in user
  const { data: user, error: userError } = await supabase.auth.getUser();
  if (userError || !user?.user) {
    redirect('/signin');
  }

  // Check if the user is an admin
  const { data: userMetadata, error: metadataError } = await supabase
    .from('profiles')
    .select('admin')
    .eq('id', user.user.id)
    .single();

  if (metadataError || !userMetadata?.admin) {
    redirect('/private');
  }

  // Fetch jobs
  const { data: jobs, error: jobsError } = await supabase
    .from('jobs')
    .select()
    .eq('reviewed', false); // Fetch only unreviewed jobs

  if (jobsError) {
    console.error('Error fetching jobs:', jobsError.message);
    return null;
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

  // Pass the fetched jobs to the Client Component
  return <AdminPortal jobs={jobsWithDomains} />;
}