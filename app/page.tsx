import { CTA } from "@/components/CTA";
import { Card } from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import { RevealObserver } from "@/components/RevealObserver";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { getPageContent, renderMarkdown } from "@/lib/content";

const navItems = [
  { label: "Hero", href: "#hero" },
  { label: "Cases", href: "#cases" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

const buildContactLink = (item: string) => {
  const [label, ...rest] = item.split(":");
  const value = rest.join(":").trim();
  if (label.toLowerCase().includes("email")) {
    return `mailto:${value}`;
  }
  if (label.toLowerCase().includes("linkedin")) {
    return value;
  }
  if (label.toLowerCase().includes("telegram")) {
    return value.startsWith("@") ? `https://t.me/${value.replace("@", "")}` : value;
  }
  return value;
};

export default function Page() {
  const content = getPageContent();
  const earlyItems = content.workHistory.filter(
    (item) => item.title.includes("PFSOFT") || item.title.includes("Design Bureau")
  );
  const mainItems = content.workHistory.filter((item) => !earlyItems.includes(item));
  const primaryContact = content.contactItems.find((item) => item.toLowerCase().includes("email"));

  return (
    <main>
      <Navbar items={navItems} />

      <section id="hero" className="section-spacing">
        <div className="container-page grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Senior Product</p>
            <h1 className="mt-3 font-heading text-4xl font-semibold text-ink md:text-5xl">
              {content.heroTitle}
            </h1>
            <div
              className="rich-text mt-5 text-sm text-muted"
              dangerouslySetInnerHTML={{ __html: content.heroBodyHtml }}
            />
            {primaryContact ? (
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={buildContactLink(primaryContact)}
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:brightness-110 hover:shadow-cardHover"
                >
                  Invite to Interview
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-ink transition hover:border-slate-300"
                >
                  Contact
                </a>
              </div>
            ) : null}
          </div>
          <div className="reveal self-start rounded-3xl border border-slate-200 bg-white p-5 shadow-card">
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
          {content.achievements.map((achievement) => (
            <Card key={achievement}>
              <div
                className="text-sm text-muted"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(achievement) }}
              />
            </Card>
          ))}
        </div>
      </Section>

      <Section id="cases" eyebrow="Proof" title="Case Studies">
        <div className="grid gap-6">
          {content.caseStudies.map((study) => (
            <Card key={study.title} title={study.title}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Problem</p>
                <p className="mt-2">{study.problem}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Action</p>
                <ul className="mt-2 list-disc space-y-2 pl-4">
                  {study.action.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Result</p>
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
        <div className="grid gap-6 md:grid-cols-3">
          {content.skillGroups.map((group) => (
            <Card key={group.title} title={group.title}>
              <p>{group.details}</p>
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
          secondaryHref={primaryContact ? buildContactLink(primaryContact) : undefined}
        />
      </Section>

      <RevealObserver />
    </main>
  );
}
