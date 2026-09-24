import type { ReactNode } from "react";
import { CheckCircle2, Clock3, Link2, ShieldAlert, UserRoundCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export const projects = [
  { id: "metro", name: "Riyadh Metro Extension", ar: "امتداد مترو الرياض", client: "Royal Commission", clientAr: "الهيئة الملكية", deadline: "28 Sep 2026", progress: 68 },
  { id: "campus", name: "Al Noor Medical Campus", ar: "مجمع النور الطبي", client: "Al Noor Health", clientAr: "صحة النور", deadline: "14 Oct 2026", progress: 42 },
  { id: "tower", name: "King Fahd Office Tower", ar: "برج الملك فهد المكتبي", client: "ECEC Developments", clientAr: "تطوير إيسك", deadline: "02 Dec 2026", progress: 81 },
];

export const columns = [
  { key: "open", en: "Open", ar: "مفتوحة", tone: "neutral" },
  { key: "progress", en: "In progress", ar: "قيد التنفيذ", tone: "blue" },
  { key: "waiting", en: "Waiting", ar: "بانتظار", tone: "amber" },
  { key: "delegated", en: "Delegated", ar: "مفوّضة", tone: "blue" },
  { key: "assignee", en: "Done by assignee", ar: "أنجزها المنفذ", tone: "green" },
  { key: "blocked", en: "Blocked", ar: "متعثرة", tone: "amber" },
  { key: "done", en: "Done", ar: "مكتملة", tone: "green" },
] as const;

export const tasks = [
  { id: 1, status: "open", title: "Review revised shop drawings", ar: "مراجعة مخططات الورشة المعدلة", project: "Riyadh Metro", projectAr: "مترو الرياض", due: "Today", dueAr: "اليوم", owner: "FA" },
  { id: 2, status: "progress", title: "Close drainage inspection notes", ar: "إغلاق ملاحظات فحص التصريف", project: "Al Noor Campus", projectAr: "مجمع النور", due: "26 Sep", dueAr: "٢٦ سبتمبر", owner: "OA" },
  { id: 3, status: "waiting", title: "Consultant approval for façade sample", ar: "اعتماد الاستشاري لعينة الواجهة", project: "Office Tower", projectAr: "البرج المكتبي", due: "28 Sep", dueAr: "٢٨ سبتمبر", owner: "MK" },
  { id: 4, status: "delegated", title: "Photograph completed ductwork", ar: "تصوير أعمال مجاري الهواء المنجزة", project: "Al Noor Campus", projectAr: "مجمع النور", due: "Today", dueAr: "اليوم", owner: "SA" },
  { id: 5, status: "assignee", title: "Confirm concrete cube results", ar: "تأكيد نتائج مكعبات الخرسانة", project: "Riyadh Metro", projectAr: "مترو الرياض", due: "Ready", dueAr: "جاهزة", owner: "NH" },
  { id: 6, status: "blocked", title: "Release electrical room access", ar: "إتاحة الوصول لغرفة الكهرباء", project: "Office Tower", projectAr: "البرج المكتبي", due: "Overdue", dueAr: "متأخرة", owner: "YA" },
  { id: 7, status: "done", title: "Submit weekly safety report", ar: "تقديم تقرير السلامة الأسبوعي", project: "Riyadh Metro", projectAr: "مترو الرياض", due: "23 Sep", dueAr: "٢٣ سبتمبر", owner: "FA" },
];

export function PageHeading({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description?: string; action?: ReactNode }) {
  return <header className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div>{eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-wide text-primary/60">{eyebrow}</p>}<h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">{title}</h1>{description && <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{description}</p>}</div>{action}</header>;
}

export function StatusPill({ tone = "neutral", children }: { tone?: "neutral" | "blue" | "green" | "amber" | "red"; children: ReactNode }) {
  return <span className={cn("inline-flex min-h-6 items-center rounded-full border px-2.5 text-[11px] font-semibold", tone === "green" && "border-success/20 bg-success-soft text-success", tone === "amber" && "border-warning/20 bg-warning-soft text-warning-foreground", tone === "blue" && "border-info/20 bg-info-soft text-info", tone === "red" && "border-destructive/20 bg-destructive/5 text-destructive", tone === "neutral" && "border-border bg-muted text-muted-foreground")}>{children}</span>;
}

export function Avatar({ initials }: { initials: string }) {
  return <span className="inline-grid size-8 shrink-0 place-items-center rounded-full bg-secondary text-[11px] font-bold text-secondary-foreground">{initials}</span>;
}

export const statusIcons = { Confirm: UserRoundCheck, Blocked: ShieldAlert, Overdue: Clock3, Delegated: Link2, Waiting: Clock3, Duplicate: CheckCircle2 };
