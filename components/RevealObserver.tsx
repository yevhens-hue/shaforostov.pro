"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    // Failsafe: reveal anything already in (or above) the viewport that the
    // observer might have missed (e.g. restored scroll position or bfcache),
    // without spoiling the animation for content further down the page.
    const revealInView = () => {
      elements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
          element.classList.add("is-visible");
        }
      });
    };
    window.addEventListener("load", revealInView, { once: true });
    window.addEventListener("pageshow", revealInView);

    return () => {
      observer.disconnect();
      window.removeEventListener("load", revealInView);
      window.removeEventListener("pageshow", revealInView);
    };
  }, []);

  return null;
}
