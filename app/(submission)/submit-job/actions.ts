'use server'

import * as cheerio from 'cheerio';
import { createClient } from '@/utils/supabase/server'; // Adjust the path to your Supabase client

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

export async function getWebsiteLogo(url: string) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    // Priority order for best logo quality
    const logoSources = [
      // 1. Apple Touch Icon (180x180 on modern iOS)
      $('link[rel="apple-touch-icon"]').last().attr('href'),
      $('link[rel="apple-touch-icon-precomposed"]').last().attr('href'),
      
      // 2. High-res PNG favicons (check sizes attribute for largest)
      $('link[rel="icon"][sizes="192x192"]').attr('href'),
      $('link[rel="icon"][sizes="180x180"]').attr('href'),
      $('link[rel="icon"][type="image/png"]').first().attr('href'),
      
      // 3. Standard favicon
      $('link[rel="shortcut icon"]').attr('href'),
      $('link[rel="icon"]').first().attr('href'),
    ];

    // Find first valid logo
    for (const logo of logoSources) {
      if (logo) {
        // Convert relative URLs to absolute
        const absoluteUrl = new URL(logo, url).href;
        console.log('Website Logo URL:', absoluteUrl);
        return absoluteUrl;
      }
    }

    // Fallback: Try standard favicon.ico location
    const fallbackUrl = new URL('/favicon.ico', url).href;
    console.log('Using fallback favicon.ico:', fallbackUrl);
    return fallbackUrl;

  } catch (error) {
    console.error('Error fetching website logo:', error);
    
    // Final fallback: Use Google's favicon service
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=256`;
  }
}

export async function insertJob(formData: FormData): Promise<string> {
  const supabase = await createClient();

  // Extract form data
  const title = formData.get('role-name') as string;
  const company = formData.get('company-name') as string;
  const url = formData.get('url') as string;

  // Validate required fields
  if (!title || !company || !url) {
    throw new Error('Missing required fields: title, company, or url');
  }

  try {
    // Insert the new job record into the "jobs" table
    const { data, error } = await supabase
      .from('jobs')
      .insert([{ title, company, url }]);

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

