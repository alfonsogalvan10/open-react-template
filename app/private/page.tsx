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
    .from("profiles")
    .select("full_name")
    .eq("id", user.user.id) // Match the user's id with the profiles table
    .single(); // Fetch a single row

  if (profileError) {
    console.error("Error fetching profile:", profileError.message);
  }

  // Fetch instruments
  const { data: instruments, error: instrumentsError } = await supabase
    .from("instruments")
    .select();

  if (instrumentsError) {
    console.error("Error fetching instruments:", instrumentsError.message);
  }

  return (
    <section className="bg-[#273e3d]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center">
            <h1 className="text-white bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Welcome back {profile?.full_name || user.user.email}!
            </h1>
            <div className="mt-8 space-y-4">
              {instruments && instruments.length > 0 ? (
                instruments.map((instrument: any, index: number) => (
                  <p
                    key={index}
                    className="text-stone-200 text-lg leading-relaxed"
                  >
                    <strong>{instrument.name}</strong>: {instrument.description || "No description available."}
                  </p>
                ))
              ) : (
                <p className="text-stone-400">No instruments found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}