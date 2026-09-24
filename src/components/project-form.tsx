import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHeading } from "./steer-ui";
import { t, useLocale } from "./steer-context";

export function ProjectForm() {
  const { isArabic } = useLocale();
  const fields = [{ en: "Project name", ar: "اسم المشروع", placeholder: "Riyadh Metro Extension" }, { en: "Client", ar: "العميل", placeholder: "Royal Commission" }, { en: "Consultant", ar: "الاستشاري", placeholder: "Dar Al Handasah" }, { en: "Deadline", ar: "الموعد النهائي", placeholder: "2026-12-15" }];
  return <><PageHeading eyebrow={t(isArabic,"Projects / New","المشاريع / جديد")} title={t(isArabic,"Create project","إنشاء مشروع")} description={t(isArabic,"Set the core project details. You can add team members next.","حدد بيانات المشروع الأساسية. يمكنك إضافة أعضاء الفريق لاحقاً.")}/><form className="max-w-3xl rounded-lg border border-border bg-card p-5 shadow-card sm:p-8" onSubmit={(event) => event.preventDefault()}><div className="grid gap-5 sm:grid-cols-2">{fields.map((field, index) => <div className="space-y-2" key={field.en}><Label htmlFor={`field-${index}`}>{t(isArabic,field.en,field.ar)}</Label><Input id={`field-${index}`} type={index === 3 ? "date" : "text"} placeholder={field.placeholder}/></div>)}<div className="space-y-2 sm:col-span-2"><Label htmlFor="description">{t(isArabic,"Description","الوصف")}</Label><Textarea id="description" className="min-h-28" placeholder={t(isArabic,"Scope, objectives, and key constraints…","النطاق والأهداف والقيود الرئيسية…")}/></div><div className="space-y-2 sm:col-span-2"><Label htmlFor="keywords">{t(isArabic,"Keywords","الكلمات المفتاحية")}</Label><Input id="keywords" placeholder={t(isArabic,"metro, civil, package 04","مترو، مدني، الحزمة ٠٤")}/><p className="text-xs text-muted-foreground">{t(isArabic,"Separate keywords with commas.","افصل بين الكلمات بفواصل.")}</p></div></div><div className="mt-8 flex justify-end gap-3"><Button variant="outline" asChild><Link to="/">{t(isArabic,"Cancel","إلغاء")}</Link></Button><Button>{t(isArabic,"Save project","حفظ المشروع")}</Button></div></form></>;
}
