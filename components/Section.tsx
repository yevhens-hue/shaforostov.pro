import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="section-spacing scroll-mt-28">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-heading text-2xl font-semibold text-ink md:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
