type NavItem = { label: string; href: string };

type NavbarProps = {
  items: NavItem[];
};

export function Navbar({ items }: NavbarProps) {
  return (
    <div className="sticky top-0 z-30 border-b border-slate-200 bg-white">
      <div className="container-page flex items-center justify-between py-4">
        <a href="#hero" className="text-sm font-semibold tracking-wide text-ink">
          Yevhen Shaforostov
        </a>
        <nav className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="underline-hover transition-colors hover:text-ink focus-visible:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
