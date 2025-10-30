import createClient from "@thecompaniesapi/sdk";

export async function POST(req: Request) {
  try {
    const { companyDomain } = await req.json();

    // Log the received body to the console
    console.log("Received body:", { companyDomain });

    if (!companyDomain) {
      return new Response(JSON.stringify({ error: "Missing companyDomain" }), {
        status: 400,
      });
    }

    // Extract the actual domain (e.g., "coverflex.com") from subdomains
    const parsedDomain =
      companyDomain.includes(".")
        ? companyDomain.split(".").slice(-2).join(".")
        : companyDomain;

    console.log("Parsed domain:", parsedDomain);

    const apiToken = process.env.COMPANIES_API_TOKEN;
    if (!apiToken) {
      return new Response(JSON.stringify({ error: "API token is not configured" }), {
        status: 500,
      });
    }

    const tca = createClient({ apiToken });

    const response = await tca.fetchCompany({ domain: parsedDomain });

    if (!response || !response.data) {
      return new Response(JSON.stringify({ error: "No data returned from API" }), {
        status: 404,
      });
    }

    // Store enriched data in Supabase (if needed)
    // Example: await supabase.from('jobs').update({ companyData: response.data }).eq('id', jobId);

    return new Response(JSON.stringify(response.data), {
      status: 200,
    });
  } catch (error) {
    console.error("Error in POST /enrich-companies:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
