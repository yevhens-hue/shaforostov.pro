"use client";

import { useEffect, useMemo, useState } from "react";
import type { PageContent } from "@/lib/content";
import { CTA } from "@/components/CTA";
import { Card } from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import { RevealObserver } from "@/components/RevealObserver";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { ActiveSection } from "@/components/ActiveSection";
import { LocaleThemeToggle } from "@/components/LocaleThemeToggle";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";

type PageClientProps = {
  contentEn: PageContent;
  contentUk: PageContent;
};

const navLabels: Record<"en" | "uk", string[]> = {
  en: ["Hero", "Cases", "Experience", "Contact"],
  uk: ["Головна", "Кейси", "Досвід", "Контакт"]
};

const navItems = (locale: "en" | "uk") => [
  { label: navLabels[locale][0], href: "#hero" },
  { label: navLabels[locale][2], href: "#experience" },
  { label: locale === "uk" ? "Навички" : "Skills", href: "#skills" },
  { label: navLabels[locale][3], href: "#contact" }
];

const buildContactLink = (item: string) => {
  const [label, ...rest] = item.split(":");
  const value = rest.join(":").trim();
  if (label.toLowerCase().includes("email")) {
    return `mailto:${value}`;
  }
  if (label.toLowerCase().includes("linkedin")) {
    return value.startsWith("http") ? value : `https://${value}`;
  }
  if (label.toLowerCase().includes("telegram")) {
    return value.startsWith("@") ? `https://t.me/${value.replace("@", "")}` : value;
  }
  return value;
};

export function PageClient({ contentEn }: PageClientProps) {
  const locale = "en";
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const content = useMemo(() => contentEn, [contentEn]);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("site-theme") as "light" | "dark" | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("site-locale", locale);
  }, [locale]);

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem("site-theme", theme);
  }, [theme]);

  const earlyItems = content.workHistory.filter(
    (item) => item.title.includes("PFSOFT") || item.title.includes("Design Bureau")
  );
  const mainItems = content.workHistory.filter((item) => !earlyItems.includes(item));
  const primaryContact =
    content.contactItems.find((item) => item.toLowerCase().includes("email")) ??
    content.contactInline.find((item) => item.toLowerCase().includes("email"));

  return (
    <main>
      <Navbar
        items={navItems(locale)}
        actions={
          <LocaleThemeToggle
            locale={locale}
            theme={theme}
            onLocaleChange={() => {}}
            onThemeChange={setTheme}
            showLocale={false}
          />
        }
      />

      <section id="hero" className="section-spacing hero-surface hero-spacing hero-divider">
        <div className="hero-chart" aria-hidden="true">
          <svg viewBox="0 0 1200 800" role="presentation">
            <path
              className="hero-chart-line"
              d="M120 610 L 260 560 L 360 540 L 480 500 L 620 460 L 760 410 L 900 360 L 1040 300"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            <g className="hero-chart-dots">
              <circle cx="260" cy="560" r="6" />
              <circle cx="480" cy="500" r="6" />
              <circle cx="760" cy="410" r="6" />
              <circle cx="1040" cy="300" r="6" />
            </g>
          </svg>
        </div>
        <div className="container-page grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="reveal hero-content">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Senior Product</p>
            <h1 className="mt-3 font-heading text-4xl font-semibold text-ink md:text-5xl">
              {content.heroTitle}
            </h1>
            <div className="hero-copy">
              <div
                className="rich-text mt-5 text-sm text-muted"
                dangerouslySetInnerHTML={{ __html: content.heroBodyHtml }}
              />
            </div>
            {primaryContact ? (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={buildContactLink(primaryContact)}
                  className="cta-button cta-primary inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold text-white shadow-card transition sm:w-auto sm:text-sm"
                  data-analytics="cta-primary"
                >
                  Invite to Interview
                </a>
                <a
                  href="#contact"
                  className="cta-button cta-secondary underline-hover inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold text-ink transition sm:w-auto sm:text-sm"
                  data-analytics="cta-secondary"
                >
                  Contact
                </a>
              </div>
            ) : null}
          </div>
          <div className="reveal self-start rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {content.contactInline.map((item) => (
                <li key={item} className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {item.split(":")[0]}
                  </span>
                  <a href={buildContactLink(item)} className="text-ink hover:text-accent">
                    {item.split(":").slice(1).join(":").trim()}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Section id="services" eyebrow="Focus" title="What I Do & Who I Help">
        <div className="grid gap-6 md:grid-cols-3">
          {content.services.map((service) => (
            <Card key={service.title} title={service.title}>
              <ul className="list-disc space-y-2 pl-4">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="achievements" eyebrow="Highlights" title="Key Achievements">
        <div className="grid gap-6 md:grid-cols-2">
          {content.achievementsHtml.map((achievementHtml, index) => (
            <Card key={`${content.achievements[index]}-${index}`}>
              <div className="text-sm text-muted" dangerouslySetInnerHTML={{ __html: achievementHtml }} />
            </Card>
          ))}
        </div>
      </Section>

      <Section id="cases" eyebrow="Proof" title="Case Studies">
        <div className="grid gap-6">
          {content.caseStudies.map((study) => (
            <Card key={study.title} title={study.title}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Problem
                </p>
                <p className="mt-2">{study.problem}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Action
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-4">
                  {study.action.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Result
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-4">
                  {study.result.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="experience" eyebrow="Experience" title="Work History">
        <Timeline items={mainItems} />
        {earlyItems.length ? (
          <details className="mt-6 rounded-2xl border border-slate-200 p-6">
            <summary className="cursor-pointer text-sm font-semibold text-ink">
              Earlier background
            </summary>
            <div className="mt-6">
              <Timeline items={earlyItems} />
            </div>
          </details>
        ) : null}
      </Section>

      <Section id="skills" eyebrow="Capabilities" title="Skills & Stack">
        <div className="skills-grid">
          {content.skillGroups.map((group) => (
            <Card key={group.title}>
              <div className="skills-card">
                <span className="skills-icon" aria-hidden="true" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-ink">{group.title}</h3>
                  <p className="skills-detail">{group.details}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="markets" eyebrow="Markets" title="Markets & Domains">
        <p className="max-w-2xl text-sm text-muted">{content.markets}</p>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Contact / CTA">
        <CTA
          title={content.contactIntro}
          items={content.contactItems}
          primaryHref={primaryContact ? buildContactLink(primaryContact) : undefined}
          secondaryHref="#contact"
          primaryLabel="Invite to Interview"
          secondaryLabel="Contact"
        />
      </Section>

      <ActiveSection />
      <AnalyticsTracker />
      <RevealObserver />
    </main>
  );
}
