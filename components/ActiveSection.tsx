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

    if (!sections.length || !("IntersectionObserver" in window)) {
      return;
    }

    const activate = (id: string | null) => {
      links.forEach((link) => {
        const match = link.getAttribute("href") === id;
        link.classList.toggle("is-active", match);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target) {
          activate(`#${(visible[0].target as HTMLElement).id}`);
        }
      },
      { threshold: [0.2, 0.35, 0.5], rootMargin: "-20% 0px -65% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}
