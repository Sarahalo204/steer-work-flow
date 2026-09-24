import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { t, useLocale } from "./steer-context";

export function LoginForm() {
  const { isArabic, toggleLocale } = useLocale();
  const [show, setShow] = useState(false);
  return <main className="grid min-h-screen place-items-center bg-background px-4"><Button variant="ghost" className="fixed end-5 top-5" onClick={toggleLocale}>{isArabic ? "EN" : "ع"}</Button><div className="w-full max-w-[420px]"><div className="mb-8 text-center"><span className="mx-auto grid size-12 place-items-center rounded-lg bg-primary font-display text-2xl font-bold text-primary-foreground">S</span><h1 className="mt-4 font-display text-3xl font-semibold">Steer</h1><p className="mt-2 text-sm text-muted-foreground">{t(isArabic, "Your projects, moving forward.", "مشاريعك، تتقدم بثبات.")}</p></div><form className="rounded-lg border border-border bg-card p-6 shadow-card sm:p-8" onSubmit={(event) => event.preventDefault()}><h2 className="font-display text-xl font-semibold">{t(isArabic, "Welcome back", "مرحباً بعودتك")}</h2><div className="mt-6 space-y-5"><div className="space-y-2"><Label htmlFor="email">{t(isArabic, "Work email", "البريد الإلكتروني للعمل")}</Label><Input id="email" type="email" placeholder="name@company.com" dir="ltr"/></div><div className="space-y-2"><Label htmlFor="password">{t(isArabic, "Password", "كلمة المرور")}</Label><div className="relative"><Input id="password" type={show ? "text" : "password"} className="pe-12"/><Button type="button" variant="ghost" size="icon-sm" className="absolute end-2 top-1/2 -translate-y-1/2" onClick={() => setShow(!show)} aria-label="Toggle password visibility">{show ? <EyeOff/> : <Eye/>}</Button></div></div><Button className="w-full" size="lg">{t(isArabic, "Sign in", "تسجيل الدخول")}</Button></div></form><p className="mt-5 text-center text-xs text-muted-foreground">{t(isArabic, "Secure access for ECEC project teams", "وصول آمن لفرق مشاريع ECEC")}</p></div></main>;
}
