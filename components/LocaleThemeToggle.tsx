"use client";

import { useEffect, useState } from "react";

type LocaleThemeToggleProps = {
  locale: "en" | "uk";
  theme: "light" | "dark";
  onLocaleChange: (locale: "en" | "uk") => void;
  onThemeChange: (theme: "light" | "dark") => void;
};

export function LocaleThemeToggle({
  locale,
  theme,
  onLocaleChange,
  onThemeChange
}: LocaleThemeToggleProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
        <button
          type="button"
          onClick={() => onLocaleChange("en")}
          className={`rounded-full px-2 py-1 ${locale === "en" ? "text-ink" : "text-muted"}`}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => onLocaleChange("uk")}
          className={`rounded-full px-2 py-1 ${locale === "uk" ? "text-ink" : "text-muted"}`}
        >
          UA
        </button>
      </div>
      <button
        type="button"
        onClick={() => onThemeChange(theme === "dark" ? "light" : "dark")}
        className="rounded-full border border-slate-200 bg-white px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted transition hover:text-ink"
        aria-pressed={theme === "dark"}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
}
