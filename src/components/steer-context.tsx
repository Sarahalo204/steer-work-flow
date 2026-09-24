import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type Locale = "en" | "ar";
type LocaleContextValue = { locale: Locale; isArabic: boolean; toggleLocale: () => void };

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function SteerProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const isArabic = locale === "ar";
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [locale, isArabic]);
  const value = useMemo(() => ({ locale, isArabic, toggleLocale: () => setLocale((current) => current === "en" ? "ar" : "en") }), [locale, isArabic]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used inside SteerProvider");
  return context;
}

export function t(isArabic: boolean, en: string, ar: string) {
  return isArabic ? ar : en;
}
