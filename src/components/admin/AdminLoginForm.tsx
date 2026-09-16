"use client";

import { useActionState, useState } from "react";
import { useRouter } from "next/navigation";
import { adminLoginAction } from "@/app/actions/admin-auth";
import { Lock, Eye, EyeOff, AlertCircle, ArrowRight, Loader2 } from "lucide-react";

export function AdminLoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [state, formAction, isPending] = useActionState(
    async (
      prevState: { success: boolean; error?: string },
      formData: FormData
    ) => {
      const res = await adminLoginAction(prevState, formData);
      if (res.success) {
        router.push("/admin");
        router.refresh();
      }
      return res;
    },
    { success: false }
  );

  return (
    <form action={formAction} className="space-y-4 font-mono-code text-xs">
      {state.error && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3 text-red-800"
        >
          <AlertCircle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
          <div className="leading-relaxed">{state.error}</div>
        </div>
      )}

      <div>
        <label
          htmlFor="identifier"
          className="block font-semibold text-foreground uppercase tracking-wider text-[11px]"
        >
          Admin ID or Email
        </label>
        <div className="mt-1.5">
          <input
            id="identifier"
            name="identifier"
            type="text"
            required
            autoComplete="username"
            placeholder="admin or admin@amubatchx.app"
            className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block font-semibold text-foreground uppercase tracking-wider text-[11px]"
        >
          Password
        </label>
        <div className="relative mt-1.5">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            autoComplete="current-password"
            placeholder="Enter admin password"
            className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 pr-10 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-foreground p-1"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-bold text-white shadow-xs hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-60 transition-all cursor-pointer"
        >
          {isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Verifying Credentials...</span>
            </>
          ) : (
            <>
              <Lock className="h-3.5 w-3.5" />
              <span>Sign In to Admin Console</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      </div>

      <div className="border-t border-border/80 pt-3 text-center text-[10px] text-muted">
        Sessions expire automatically after 24 hours of inactivity.
      </div>
    </form>
  );
}
