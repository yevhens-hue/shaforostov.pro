type TimelineItem = {
  title: string;
  meta: string;
  bullets: string[];
  bulletsHtml: string[];
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
              {item.bulletsHtml.map((bulletHtml, index) => (
                <li key={`${item.title}-${index}`} dangerouslySetInnerHTML={{ __html: bulletHtml }} />
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
