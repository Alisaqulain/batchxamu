import { createClient, SupabaseClient } from "@supabase/supabase-js";

export const STORAGE_BUCKET_APK = "app-releases";

export interface AppVersion {
  id: string;
  latest_version: string;
  minimum_supported_version: string;
  force_update: boolean;
  update_title: string | null;
  update_description: string | null;
  download_url: string | null;
  version_code: number | null;
  latest_version_code: number | null;
  apk_file_name: string | null;
  apk_file_size: string | null;
  created_at: string;
  updated_at: string;
}

export interface AdminUser {
  id: string;
  email: string;
  full_name: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface AdminSessionVerification {
  valid: boolean;
  admin_email?: string;
  admin_name?: string;
  expires_at?: string;
}

export interface AdminActivityLog {
  id: string;
  admin_email: string;
  action: string;
  details: string | null;
  created_at: string;
}

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://isibtuxbqrcnrootuikw.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzaWJ0dXhicXJjbnJvb3R1aWt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU2NTI5NDEsImV4cCI6MjEwMTIyODk0MX0.nmgKsY7K9BR4fA3LisiuNQbYkkVVcLKYOasQU2e0HF0";

let browserClient: SupabaseClient | null = null;

export function getSupabaseBrowserClient(): SupabaseClient {
  if (typeof window === "undefined") {
    return createClient(supabaseUrl, supabaseAnonKey);
  }
  if (!browserClient) {
    browserClient = createClient(supabaseUrl, supabaseAnonKey);
  }
  return browserClient;
}

export function getSupabaseServerClient(): SupabaseClient {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
