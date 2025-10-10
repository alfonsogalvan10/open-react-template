import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'

export async function approveJob(jobId: string) {
  
const supabase = await createClient();

  try {
    const { error } = await supabase
      .from('jobs')
      .update({ approved: true }) // Set the "approved" field to true
      .eq('id', jobId); // Match the job by its ID

    if (error) {
        redirect('/error')
      }
    
      revalidatePath('/', 'layout')
      redirect('/')

    return true; // Return true if the update succeeds
  } catch (error) {
    console.error('Unexpected error approving job:', error);
  }
}