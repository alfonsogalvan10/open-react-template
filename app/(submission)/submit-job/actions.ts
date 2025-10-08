'use server'

export async function validateJobUrl(formData: FormData): Promise<string> {
  // Extract the URL from the form data
  const url = formData.get('url') as string;

  // Validate the URL
  try {
    const response = await fetch(url, { method: 'GET' }); // Use GET instead of HEAD
    if (!response.ok) {
      throw new Error(`URL validation failed with status: ${response.status}`);
    }

    // If the URL is valid, return success message
    return 'All good';
  } catch (error) {
    console.error('Invalid URL:', error);
    return 'Invalid URL';
  }
}