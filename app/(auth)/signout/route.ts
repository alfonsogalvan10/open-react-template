import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { redirect } from 'next/navigation';

export async function POST() {
  const supabase = await createClient();

  // Check if a user is logged in
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error("No user is logged in:", userError?.message);
    return NextResponse.json({ error: "No user is logged in" }, { status: 400 });
  }

  // Proceed with sign-out if a user is logged in
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error signing out:", error.message);
    return NextResponse.json({ error: "Failed to sign out" }, { status: 500 });
  }

  // Redirect the user to the home page after successful sign-out
  redirect('/');
}