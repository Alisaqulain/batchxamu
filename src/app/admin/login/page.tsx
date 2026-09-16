import { redirect } from "next/navigation";
import { verifyAdminSession } from "@/app/actions/admin-auth";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Admin Portal Authentication",
  description: "Secure login for AMU BATCH X operations and release management.",
  path: "/admin/login",
});

export default async function AdminLoginPage() {
  const session = await verifyAdminSession();
  if (session && session.valid) {
    redirect("/admin");
  }

  return (
    <div className="min-h-screen bg-surface-muted flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link href="/" className="inline-block group mb-3">
          <Image
            src="/logo.png"
            alt="AMU BATCH X Logo"
            width={64}
            height={64}
            className="mx-auto h-14 w-14 rounded-2xl border border-border shadow-xs group-hover:scale-105 transition-transform"
          />
        </Link>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary-light px-3 py-0.5 font-mono-code text-[11px] font-bold text-primary mb-2">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>RESTRICTED ACCESS</span>
        </div>
        <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
          Batch X Operations Console
        </h1>
        <p className="mt-1 font-mono-code text-xs text-muted">
          Department of Computer Science · amubatchx.app
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-md">
          <AdminLoginForm />
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="font-mono-code text-xs text-muted hover:text-foreground transition-colors inline-flex items-center gap-1"
          >
            <span>← Return to Public Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
