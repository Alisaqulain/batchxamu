"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSupabaseServerClient, AdminSessionVerification } from "@/lib/supabase";

const SESSION_COOKIE_NAME = "batchx_admin_session";

export async function verifyAdminSession(): Promise<AdminSessionVerification | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);

  if (!sessionCookie || !sessionCookie.value) {
    return null;
  }

  try {
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase.rpc("validate_admin_session", {
      p_token: sessionCookie.value.trim(),
    });

    if (error || !data || data.valid !== true) {
      return null;
    }

    return {
      valid: true,
      admin_email: data.admin_email,
      admin_name: data.admin_name,
      expires_at: data.expires_at,
    };
  } catch (err) {
    console.error("Failed to validate admin session:", err);
    return null;
  }
}

export async function adminLoginAction(
  _prevState: { success: boolean; error?: string },
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  const identifier = formData.get("identifier") as string;
  const password = formData.get("password") as string;

  if (!identifier || !identifier.trim()) {
    return { success: false, error: "Admin ID / Username is required" };
  }

  if (!password || !password.trim()) {
    return { success: false, error: "Password is required" };
  }

  try {
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase.rpc("verify_admin_login", {
      p_email: identifier.trim(),
      p_pin: password.trim(),
    });

    if (error) {
      return { success: false, error: error.message || "Authentication error" };
    }

    if (!data || data.success !== true) {
      return {
        success: false,
        error: data?.error || "Invalid Admin ID or Password",
      };
    }

    const cookieStore = await cookies();
    cookieStore.set({
      name: SESSION_COOKIE_NAME,
      value: data.token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });

    return { success: true };
  } catch (err) {
    console.error("Admin login exception:", err);
    return { success: false, error: "Internal server error during authentication" };
  }
}

export async function adminLogoutAction() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);

  if (sessionCookie && sessionCookie.value) {
    try {
      const supabase = getSupabaseServerClient();
      await supabase.rpc("revoke_admin_session", {
        p_token: sessionCookie.value.trim(),
      });
    } catch (err) {
      console.error("Error revoking session:", err);
    }
    cookieStore.delete(SESSION_COOKIE_NAME);
  }

  redirect("/admin/login");
}
