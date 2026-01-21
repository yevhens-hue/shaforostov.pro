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
    <div className="timeline">
      {items.map((item) => (
        <article key={item.title} className="reveal timeline-item">
          <span className="timeline-dot" />
          <div className="timeline-content">
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-meta">{item.meta}</p>
            <ul className="timeline-list">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
