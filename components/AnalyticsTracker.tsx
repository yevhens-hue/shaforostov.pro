"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const track = (event: string, props?: Record<string, string>) => {
  window.gtag?.("event", event, props ?? {});
};

export function AnalyticsTracker() {
  useEffect(() => {
    track("page_view", { page_path: window.location.pathname });

    const clickHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const button = target?.closest<HTMLElement>("[data-analytics]");
      if (!button) {
        return;
      }
      const label = button.dataset.analytics ?? "cta";
      track("cta_click", { label });
      if (label === "cta-primary" || label === "cta-primary-footer") {
        track("invite_to_interview_click");
      }
    };

    document.addEventListener("click", clickHandler);

    const fired = new Set<number>();
    const thresholds = [25, 50, 75, 100];
    let ticking = false;
    let rafId: number | null = null;
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        return;
      }
      const pct = Math.round((scrollTop / docHeight) * 100);
      thresholds.forEach((threshold) => {
        if (pct >= threshold && !fired.has(threshold)) {
          fired.add(threshold);
          track("scroll_depth", { percent: String(threshold) });
        }
      });
    };

    const scrollHandler = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      rafId = window.requestAnimationFrame(() => {
        onScroll();
        ticking = false;
        rafId = null;
      });
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });
    onScroll();

    return () => {
      document.removeEventListener("click", clickHandler);
      window.removeEventListener("scroll", scrollHandler);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return null;
}
