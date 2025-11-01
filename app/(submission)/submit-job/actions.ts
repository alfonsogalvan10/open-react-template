'use server'

import { createClient } from '@/utils/supabase/server'; // Adjust the path to your Supabase client


export async function insertJob(formData: FormData): Promise<string> {
  const supabase = await createClient();

  // Extract form data
  const title = formData.get('role-name') as string;
  const company = formData.get('company-name') as string;
  const url = formData.get('url') as string;
  const why_this_job = formData.get('why-this-job') as string;
  const tags = (formData.get('tags') as string)?.split(',').map(tag => tag.trim());

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Ensure user is authenticated
  if (!user) {
    throw new Error('User not authenticated');
  }

  // Validate required fields
  if (!title || !company || !url || !why_this_job || !tags) {
    throw new Error('Missing required fields: title, company, url, why_this_job, or tags');
  }

  try {
    // Insert the new job record into the "jobs" table
    const { data, error } = await supabase
      .from('jobs')
      .insert([{ title, company, url, why_this_job, tags, contributor_id: user.id }]);

    if (error) {
      console.error('Error inserting job:', error);
      throw new Error('Failed to insert job');
    }

    console.log('Job inserted successfully:', data);
    return 'Job inserted successfully';
  } catch (error) {
    console.error('Error in insertJob action:', error);
    return 'Failed to insert job';
  }
}

