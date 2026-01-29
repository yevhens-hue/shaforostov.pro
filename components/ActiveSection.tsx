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

    const offset = 140;
    const getCurrentSection = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        return sections[sections.length - 1];
      }
      const scrollPos = window.scrollY + offset;
      let current = sections[0];
      sections.forEach((section) => {
        if (section.offsetTop <= scrollPos) {
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
    window.addEventListener("hashchange", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return null;
}
