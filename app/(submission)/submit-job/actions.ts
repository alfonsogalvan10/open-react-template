'use server'

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function insertJob(formData: FormData): Promise<void> {
  const supabase = await createClient();

  // Extract form data
  const role_type = formData.get('role-type') as string;
  const company = formData.get('company-name') as string;
  const url = formData.get('url') as string;
  const why_this_job = formData.get('why-this-job') as string;
  const tags = (formData.get('tags') as string)?.split(',').map(tag => tag.trim());

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Ensure user is authenticated
  if (!user) {
    redirect('/error'); // Redirect to error page if user is not authenticated
  }

  // Insert the new job record into the "jobs" table
  const { error } = await supabase
    .from('jobs')
    .insert([{ role_type, company, url, why_this_job, tags, contributor_id: user.id }]);

  if (error) {
    console.error('Error inserting job:', error);
    redirect('/error'); // Redirect to error page for any insertion error
  }

  redirect('/'); // Redirect to home page if insertion succeeds
}

