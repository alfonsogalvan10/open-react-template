'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import SubmitJobForm from './SubmitJobForm';

export default async function SubmitJob() {
  const supabase = await createClient();

  // Get the logged-in user
  const { data: user, error: userError } = await supabase.auth.getUser();
  if (userError || !user?.user) {
    redirect('/signin'); // Redirect to signin page if user is not authenticated
  }

  return (
    <section className="bg-stone-200">
      <SubmitJobForm />
    </section>
  );
}