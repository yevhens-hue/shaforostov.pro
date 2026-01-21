import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="section-spacing scroll-mt-28 perf-section">
      {eyebrow ? (
        <p className="section-pad text-xs font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="section-pad mt-3 font-heading text-2xl font-semibold text-ink md:text-3xl">{title}</h2>
      <div className="section-pad mt-6">{children}</div>
    </section>
  );
}
