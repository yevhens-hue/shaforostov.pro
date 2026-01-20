type TimelineItem = {
  title: string;
  meta: string;
  bullets: string[];
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-8 timeline">
      {items.map((item) => (
        <article key={item.title} className="reveal relative pb-10">
          <span className="absolute -left-[7px] top-2 timeline-dot" />
          <h3 className="font-heading text-lg font-semibold text-ink">{item.title}</h3>
          <p className="mt-1 text-sm text-muted">{item.meta}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
