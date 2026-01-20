type CTAProps = {
  title: string;
  items: string[];
  primaryHref?: string;
  secondaryHref?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

const getItemValue = (item: string) => item.split(":").slice(1).join(":").trim();

const getHref = (item: string) => {
  const [label, ...rest] = item.split(":");
  const value = rest.join(":").trim();
  const lowerLabel = label.toLowerCase();
  if (lowerLabel.includes("email")) {
    return `mailto:${value}`;
  }
  if (lowerLabel.includes("linkedin")) {
    return value;
  }
  if (lowerLabel.includes("telegram")) {
    return value.startsWith("@") ? `https://t.me/${value.replace("@", "")}` : value;
  }
  return value;
};

export function CTA({
  title,
  items,
  primaryHref,
  secondaryHref,
  primaryLabel = "Invite to Interview",
  secondaryLabel = "Contact"
}: CTAProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
      <h3 className="font-heading text-2xl font-semibold text-ink">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-muted">
        {items.map((item) => (
          <li key={item}>
            <span className="font-semibold text-ink">{item.split(":")[0]}:</span>{" "}
            <a href={getHref(item)} className="text-accent hover:underline">
              {getItemValue(item)}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={primaryHref}
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:brightness-110 hover:shadow-cardHover"
        >
          {primaryLabel}
        </a>
        <a
          href={secondaryHref}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-ink transition hover:border-slate-300"
        >
          {secondaryLabel}
        </a>
      </div>
    </div>
  );
}
