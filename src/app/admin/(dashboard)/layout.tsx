import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { verifyAdminSession, adminLogoutAction } from "@/app/actions/admin-auth";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Upload,
  HardDrive,
  History,
  LogOut,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { AdminNavLinks } from "@/components/admin/AdminNavLinks";

export default async function AdminDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await verifyAdminSession();
  if (!session || !session.valid) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-surface-muted text-foreground flex flex-col font-sans">
      {/* Top Operations Header Bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-surface shadow-2xs">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <Link href="/admin" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="AMU BATCH X Logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg border border-border object-cover"
              />
              <div>
                <span className="font-display text-sm font-bold tracking-tight text-foreground block leading-tight">
                  BATCH X ADMIN
                </span>
                <span className="font-mono-code text-[10px] text-muted block leading-tight">
                  amubatchx.app // Console
                </span>
              </div>
            </Link>

            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary-light px-2.5 py-0.5 font-mono-code text-[10px] font-bold text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span>SUPABASE LIVE</span>
            </span>
          </div>

          {/* User Session & Logout Action */}
          <div className="flex items-center gap-3 font-mono-code text-xs">
            <div className="hidden md:flex items-center gap-2 rounded-lg border border-border bg-surface-muted px-2.5 py-1 text-muted">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              <span className="truncate max-w-[180px]">{session.admin_email}</span>
            </div>

            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface px-2.5 py-1.5 text-muted hover:text-foreground hover:bg-surface-muted transition-colors"
              title="View Public Site"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span className="hidden sm:inline text-[11px]">View Site</span>
            </Link>

            <form action={adminLogoutAction}>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50/70 px-2.5 py-1.5 font-bold text-red-700 hover:bg-red-100 transition-colors cursor-pointer text-[11px]"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Sign Out</span>
              </button>
            </form>
          </div>

        </div>

        {/* Horizontal Navigation Tabs (Responsive) */}
        <div className="border-t border-border bg-surface-muted/50 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <AdminNavLinks />
          </div>
        </div>
      </header>

      {/* Main Content Workspace */}
      <main className="flex-1 mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-surface py-4 px-4 sm:px-6 lg:px-8 text-center font-mono-code text-[11px] text-muted">
        <span>AMU BATCH X Operations System · Connected to Supabase Project (Batch 26)</span>
      </footer>
    </div>
  );
}
