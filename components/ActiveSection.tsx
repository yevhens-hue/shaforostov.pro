"use client";

import { useEffect } from "react";

export function ActiveSection() {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-link"));
    const sections = links
      .map((link) => link.getAttribute("href"))
      .filter((href): href is string => Boolean(href && href.startsWith("#")))
      .map((href) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const activate = (id: string | null) => {
      links.forEach((link) => {
        const match = link.getAttribute("href") === id;
        link.classList.toggle("is-active", match);
      });
    };

    const getCurrentSection = () => {
      const viewportCenter = window.innerHeight / 2;
      let current = sections[0];
      let bestDistance = Number.POSITIVE_INFINITY;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - viewportCenter);
        if (distance < bestDistance) {
          bestDistance = distance;
          current = section;
        }
      });
      return current;
    };

    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId !== null) {
        return;
      }
      rafId = window.requestAnimationFrame(() => {
        const current = getCurrentSection();
        activate(`#${current.id}`);
        rafId = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return null;
}
