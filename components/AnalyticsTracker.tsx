"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

const track = (event: string, props?: Record<string, string>) => {
  window.plausible?.(event, props ? { props } : undefined);
};

export function AnalyticsTracker() {
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const button = target?.closest<HTMLElement>("[data-analytics]");
      if (!button) {
        return;
      }
      const label = button.dataset.analytics ?? "cta";
      track("CTA Click", { label });
    };

    document.addEventListener("click", clickHandler);

    const fired = new Set<number>();
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        return;
      }
      const pct = Math.round((scrollTop / docHeight) * 100);
      [25, 50, 75, 100].forEach((threshold) => {
        if (pct >= threshold && !fired.has(threshold)) {
          fired.add(threshold);
          track("Scroll Depth", { percent: String(threshold) });
        }
      });
    };

    const scrollHandler = () => {
      requestAnimationFrame(onScroll);
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });
    onScroll();

    return () => {
      document.removeEventListener("click", clickHandler);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return null;
}
