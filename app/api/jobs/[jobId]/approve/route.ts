import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ jobId: string }> }
) {
  const { jobId } = await params; // Await the params to access jobId
  const supabase = await createClient();

  try {
    // Update the job's approval status in the database
    const { error } = await supabase
      .from("jobs")
      .update({ approved: true })
      .eq("id", jobId);

    if (error) {
      return NextResponse.json({ message: "Failed to approve the job." }, { status: 400 });
    }

    return NextResponse.json({ message: "Job approved successfully." });
  } catch (error) {
    console.error("Error approving job:", error);
    return NextResponse.json({ message: "An unexpected error occurred." }, { status: 500 });
  }
}