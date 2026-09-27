import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { BriefcaseBusiness, CalendarCheck2, Inbox, KanbanSquare, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { t, useLocale } from "./steer-context";

const nav = [
  { to: "/" as const, en: "Projects", ar: "المشاريع", icon: BriefcaseBusiness },
  { to: "/inbox" as const, en: "Inbox", ar: "الوارد", icon: Inbox },
  { to: "/board" as const, en: "Board", ar: "لوحة المهام", icon: KanbanSquare },
  { to: "/today" as const, en: "Today", ar: "اليوم", icon: CalendarCheck2 },
];

function Brand() {
  return <Link to="/" className="inline-flex items-center gap-3" aria-label="Steer home"><span className="relative grid size-10 place-items-center rounded-xl bg-foreground text-lg font-bold text-primary-foreground shadow-sm">S<span className="absolute -end-0.5 -top-0.5 size-3 rounded-full border-2 border-sidebar bg-primary"/></span><span><b className="block font-display text-xl leading-none text-foreground">Steer<span className="text-primary">.</span></b><small className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Execution OS</small></span></Link>;
}

export function AppShell({ children }: { children: ReactNode }) {
  const { isArabic, toggleLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const sidebar = <><div className="mb-12 flex items-center justify-between"><Brand/><Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(false)} aria-label="Close menu"><X/></Button></div><nav className="space-y-2">{nav.map((item) => { const Icon = item.icon; const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to); return <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className={cn("relative flex min-h-12 items-center gap-3 rounded-xl px-4 text-sm font-semibold transition-all duration-200", active ? "bg-accent text-accent-foreground before:absolute before:inset-y-3 before:start-0 before:w-1 before:rounded-full before:bg-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground")}><Icon className="size-[18px]"/><span>{t(isArabic, item.en, item.ar)}</span></Link>; })}</nav><div className="mt-auto rounded-2xl border border-border bg-surface p-4"><p className="text-sm font-semibold text-foreground">{t(isArabic, "Faisal Al Harbi", "فيصل الحربي")}</p><p className="mt-1 truncate text-xs text-muted-foreground">faisal@ecec.com.sa</p></div></>;
  return <div className="min-h-screen bg-background"><aside className="fixed inset-y-0 start-0 z-40 hidden w-64 flex-col border-e border-border bg-sidebar p-5 lg:flex">{sidebar}</aside>{open && <div className="fixed inset-0 z-50 lg:hidden"><button className="absolute inset-0 bg-overlay" onClick={() => setOpen(false)} aria-label="Close navigation"/><aside className="absolute inset-y-0 start-0 flex w-[min(82vw,20rem)] flex-col bg-sidebar p-5 shadow-xl">{sidebar}</aside></div>}<div className="lg:ps-64"><header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-card/90 px-4 backdrop-blur-xl sm:px-7"><Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(true)} aria-label="Open navigation"><Menu/></Button><div className="hidden lg:block"><p className="text-xs font-medium text-muted-foreground">{t(isArabic, "Thursday, 24 September", "الخميس، ٢٤ سبتمبر")}</p></div><div className="ms-auto flex items-center gap-2"><Button variant="outline" onClick={toggleLocale} className="min-w-20 rounded-full px-3" aria-label="Switch language"><span className={!isArabic ? "text-primary" : "text-muted-foreground"}>EN</span><span className="text-border">|</span><span className={isArabic ? "text-primary" : "text-muted-foreground"}>ع</span></Button><Button variant="ghost" size="icon" aria-label={t(isArabic, "Sign out", "تسجيل الخروج")}><LogOut/></Button></div></header><main className="mx-auto w-full max-w-[1440px] p-4 sm:p-7 lg:p-8">{children}</main></div></div>;
}
