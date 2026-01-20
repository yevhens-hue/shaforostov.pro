import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
};

export function Card({ title, children }: CardProps) {
  return (
    <div className="reveal rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:shadow-cardHover">
      {title ? <h3 className="font-heading text-lg font-semibold text-ink">{title}</h3> : null}
      <div className={title ? "mt-4 space-y-3 text-sm text-muted" : "space-y-3 text-sm text-muted"}>
        {children}
      </div>
    </div>
  );
}
